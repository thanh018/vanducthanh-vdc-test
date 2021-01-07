import get from 'lodash/get';

const STATUS_TYPE = {
  passed: [],
  failed: [],
  blocked: [],
  skipped: [],
  untested: [],
};

const TEST_CASE_TYPE = {
  Draft: [],
  Ready: [],
  Dropped: [],
};

const statusDataMapper = input => ({
  Passed: get(input, 'passed', ''),
  Failed: get(input, 'failed', ''),
  Blocked: get(input, 'blocked', ''),
  Skipped: get(input, 'skipped', ''),
  Untested: get(input, 'untested', ''),
});

export { STATUS_TYPE, statusDataMapper, TEST_CASE_TYPE };
