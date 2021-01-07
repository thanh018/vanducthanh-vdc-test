import React from 'react';
import { mountWithIntl } from 'tests/intlHelper/intlHelper';
import toJson from 'enzyme-to-json';
import {
  WeatherPage,
  mapDisPatchToProps,
  onGoToDetail,
  weathersToDisplay,
} from '../index';
import {
  weatherDetailMockData,
  locationListMockData,
  weatherDetailMapMockData,
} from './__mocks__/index';

describe('WeatherPage', () => {
  let renderedPage;
  let mockProps;

  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    const resetWeatherDetailMock = jest.spyOn(
      mapDisPatchToProps,
      'resetWeatherDetail',
    );
    const fetchSearchDataMock = jest.spyOn(
      mapDisPatchToProps,
      'fetchSearchData',
    );
    const getWeatherDetailMock = jest.spyOn(
      mapDisPatchToProps,
      'getWeatherDetail',
    );

    mockProps = {
      locationList: [],
      weatherDetail: [],
      locationTitle: '',
      isLoading: false,
      resetWeatherDetail: resetWeatherDetailMock,
      fetchSearchData: fetchSearchDataMock,
      getWeatherDetail: getWeatherDetailMock,
    };

    renderedPage = mountWithIntl(<WeatherPage {...mockProps} />, 'en', true);
  });

  afterEach(() => {
    jest.clearAllMocks();
    renderedPage.unmount();
    mockProps = null;
  });

  it('should render renderedPage', () => {
    expect(renderedPage.length).toBe(1);
  });

  it('should match to snapshot', () => {
    expect(
      toJson(renderedPage, {
        mode: 'deep',
        noKey: true,
      }),
    ).toMatchSnapshot();
  });

  describe('Check render results', () => {
    it('should render list results', async () => {
      const event = {
        target: { value: 'm' },
      };
      const searchInput = renderedPage.find(
        'input[data-testid="search-input-location"]',
      );

      searchInput.simulate('change', event);
      renderedPage.setProps({ isLoading: false });
      renderedPage.setProps({ query: 'm' });
      renderedPage.setProps({ locationList: locationListMockData });
      renderedPage.setProps({ weatherDetail: [] });
      const spinComp = renderedPage.find('.ant-spin-nested-loading');
      const listResult = await renderedPage.find(
        '[data-testid="list-location"]',
      );
      expect(spinComp.length).not.toBe(0);
      expect(listResult.length).not.toBe(0);
    });

    it('should call getWeatherDetail when click item of location', async () => {
      const event = {
        target: { value: 's' },
      };
      const searchInput = renderedPage.find(
        'input[data-testid="search-input-location"]',
      );

      searchInput.simulate('change', event);
      renderedPage.setProps({ isLoading: false });
      renderedPage.setProps({ query: 's' });
      renderedPage.setProps({ locationList: locationListMockData });
      renderedPage.setProps({ weatherDetail: [] });
      const itemLocation = await renderedPage.find('.ant-list-item').first(0);

      itemLocation.simulate('click');
      expect(mockProps.getWeatherDetail).toHaveBeenCalledTimes(1);
    });
  });

  describe('Life cycle of components', () => {
    describe('Check fetchSearchData function in useEffect', () => {
      it('should call not fetchSearchData when query state changed before 3s', () => {
        const queryDataMock = 'san';
        renderedPage.setProps({ query: queryDataMock });
        expect(mockProps.fetchSearchData).toHaveBeenCalledTimes(0);
      });

      it('should call fetchSearchData 1 time when query state changed and after 3s', () => {
        const queryDataMock = 'san';
        renderedPage.setProps({ query: queryDataMock });
        setTimeout(() => {
          expect(mockProps.fetchSearchData).toHaveBeenCalledTimes(1);
        }, 300);
      });

      it('should call resetWeatherDetail func when filled search input', () => {
        renderedPage.setProps({ weatherDetail: [{ id: 1 }] });
        const event = {
          target: { value: 'sa' },
        };
        const searchInput = renderedPage.find(
          'input[data-testid="search-input-location"]',
        );

        searchInput.simulate('change', event);
        expect(mockProps.resetWeatherDetail).toHaveBeenCalledTimes(1);
      });

      it('should call not resetWeatherDetail func when weatherDetail empty', () => {
        renderedPage.setProps({ weatherDetail: [] });
        const event = {
          target: { value: 'sa' },
        };
        const searchInput = renderedPage.find(
          'input[data-testid="search-input-location"]',
        );

        searchInput.simulate('change', event);
        expect(mockProps.resetWeatherDetail).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe('Check some function out of side useEffect', () => {
    beforeEach(() => {
      renderedPage.setProps({ query: 'san' });
      renderedPage.setProps({ locationList: locationListMockData });
      renderedPage.setProps({ weatherDetail: [] });
    });

    afterEach(() => {
      renderedPage.setProps({ query: '' });
      renderedPage.setProps({ locationList: [] });
      renderedPage.setProps({ weatherDetail: [] });
    });

    it('should call getWeatherDetail 1 time', () => {
      onGoToDetail(1, mockProps.getWeatherDetail);
      expect(mockProps.getWeatherDetail).toHaveBeenCalledTimes(1);
    });

    it('should call getWeatherDetail 1 time', () => {
      const weathersMap = weathersToDisplay(weatherDetailMockData);
      expect(weathersMap).toEqual(weatherDetailMapMockData);
    });
  });
});
