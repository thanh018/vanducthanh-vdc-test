import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { compose } from 'redux';

import {
  Col,
  Row,
  Input,
  AutoComplete,
  List,
  Card,
  Typography,
  Empty,
  Spin,
} from 'antd';
import get from 'lodash/get';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { createStructuredSelector } from 'reselect';
import {
  fetchSearchData,
  getWeatherDetail,
  resetWeatherDetail,
} from './actions';
import {
  selectLocationList,
  selectWeatherDetail,
  selectTitle,
  selectIsLoading,
} from './selectors';

import reducer from './reducer';
import saga from './saga';

import 'antd/es/input/style/css';
import 'antd/es/grid/style/css';
import styles from './style.module.scss';

import { DAYS } from './constants';

const { Title } = Typography;

export const onGoToDetail = (id, getDetailFn) => {
  getDetailFn(id);
};

const tempToFixed = num => parseFloat(num).toFixed(2);

export const weathersToDisplay = weathers =>
  weathers
    .map((weather, index) => {
      const min = get(weather, 'min_temp', '');
      const max = get(weather, 'max_temp', '');
      return {
        day: DAYS[index] ? DAYS[index] : '',
        name: get(weather, 'weather_state_name', ''),
        min: tempToFixed(min),
        max: tempToFixed(max),
      };
    })
    .filter(weather => weather.day);

export const WeatherPage = props => {
  useInjectReducer({ key: 'weather', reducer });
  useInjectSaga({ key: 'weather', saga });

  const { locationList, weatherDetail, locationTitle, isLoading } = props;
  const [query, setQuery] = useState('');

  const onSearch = e => {
    const text = e.toString().trim();
    setQuery(text);
    if (weatherDetail.length > 0) {
      props.resetWeatherDetail();
    }
  };

  useEffect(() => {
    let timeOutId;
    if (query) {
      timeOutId = setTimeout(() => {
        props.fetchSearchData(query);
      }, 300);
    }
    return () => clearTimeout(timeOutId);
  }, [query]);

  const onGoToWeatherDetail = locationId => {
    onGoToDetail(locationId, props.getWeatherDetail);
  };

  return (
    <div className={styles.layout}>
      <Title level={2}>Weather page</Title>
      <Row>
        <Col span={6} />
        <Col span={12}>
          <div className={styles['search-wrap']}>
            <AutoComplete
              className={styles.search}
              onSearch={onSearch}
              style={{ width: '100%' }}
            >
              <Input.Search
                className={styles.searchBtn}
                size="large"
                placeholder="Search a location"
                enterButton
                data-testid="search-input-location"
              />
            </AutoComplete>
          </div>
          {!weatherDetail.length && query && (
            <div className={styles.results}>
              {locationList.length ? (
                <Spin spinning={isLoading}>
                  <List
                    data-testid="list-location"
                    header={
                      <Title level={3} type="success">
                        {`${locationList.length} location(s)`}
                      </Title>
                    }
                    footer={null}
                    bordered
                    dataSource={locationList}
                    renderItem={(item, index) => (
                      <List.Item
                        key={get(item, 'woeid', '')}
                        onClick={() =>
                          onGoToWeatherDetail(get(item, 'woeid', ''))
                        }
                        data-testid={index}
                      >
                        <Typography.Text mark>{`[${query}]`}</Typography.Text>{' '}
                        {get(item, 'title', '')}
                      </List.Item>
                    )}
                  />
                </Spin>
              ) : (
                <Empty />
              )}
            </div>
          )}
        </Col>
        <Col span={6} />
      </Row>
      {weatherDetail.length > 0 && (
        <Row>
          <Col span={4} />
          <Col span={16}>
            <div className={styles.details}>
              <Title type="success" level={3}>
                {locationTitle}
              </Title>
              <List
                dataSource={weathersToDisplay(weatherDetail)}
                renderItem={item => (
                  <List.Item>
                    <Card title={item.day}>
                      <h6>{item.name}</h6>
                      {item.min && <p>{`Min: ${item.min}`}</p>}
                      {item.max && <p>{`Max: ${item.max}`}</p>}
                    </Card>
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col span={4} />
        </Row>
      )}
    </div>
  );
};

export const mapStateToProps = createStructuredSelector({
  locationList: selectLocationList,
  weatherDetail: selectWeatherDetail,
  locationTitle: selectTitle,
  isLoading: selectIsLoading,
});

export const mapDisPatchToProps = {
  resetWeatherDetail,
  fetchSearchData,
  getWeatherDetail,
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDisPatchToProps,
  ),
);

export default enhance(WeatherPage);
