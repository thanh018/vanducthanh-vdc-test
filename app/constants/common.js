// date format
export const FULL_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const ISO_DATE_FORMART = 'YYYY/MM/DD';
export const NORMAL_DATE_FORMAT = 'YYYY-MM-DD';

// constant for paging default
export const PAGE_START_IDX = 1; // paging start from 1 in antd, but in server start from 0
export const PAGE_SIZE_DEFAULT = 20;

export const API_TIMEOUT = 30000;

export const ACCESS_TOKEN = 'token';
export const REFRESH_TOKEN = 'refresh_token';
export const USER_INFO = 'user_info';
export const PROJECT_INFO = 'project_info';
export const PROJECT_ITEM = 'project_item';
export const MENU = 'menu';

export const TRUE = 'Yes';
export const FALSE = 'No';

// use to parse sort direction from antd to server params
export const SORT_DIRECTION = {
  ascend: 'ASC',
  descend: 'DESC',
};

// code type use in dropdown
export const CODE_TYPE = {
  STATUS: 'Status',
  PROJECT_STATUS: 'ProjectStatus',
  PRIORITY: 'Priority',
  TYPE: 'Type',
};

export const DASHBOARD_ACCESS = 'dashboard_access';

export const PRIORITY_TYPE = {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
};

export const PRIORITY_LEVEL = {
  HIGH: 0,
  MEDIUM: 1,
  LOW: 2,
};

export const TESTCASE_STATUS = {
  READY: 'READY',
  DRAFT: 'DRAFT',
  DROPPED: 'DROPPED',
};
