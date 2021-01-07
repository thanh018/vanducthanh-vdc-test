export const HOME_URI = '/';
export const SIGNIN_URI = '/sign-in';
export const FORGOT_URL = '/forgot-passowrd';

export const SETTING_USER_URI = '/settings/users';
export const SETTING_USER_CREATE_URI = `${SETTING_USER_URI}/create`;
export const SETTING_USER_ASSIGN_USER_URI = `${SETTING_USER_URI}/assign-user`;

export const USER_MANAGEMENT_URI = '/settings/users';
export const USER_MANAGEMENT_CREATE_URI = `${USER_MANAGEMENT_URI}/create`;
export const USER_MANAGEMENT_ASSIGN_USER_URI = `${USER_MANAGEMENT_URI}/assign-user`;

export const PROJECT_LIST_URI = '/project-list';
export const SETTING_PROJECT_URI = '/settings/projects';
export const SETTING_PROJECT_CREATE_URI = `${SETTING_PROJECT_URI}/create`;
export const SETTING_PROJECT_DETAIL_URI = `${SETTING_PROJECT_URI}/detail`;
export const SETTING_PROJECT_CREATE_USER_URI = `${SETTING_PROJECT_URI}/new-user`;

export const TEST_SUITE_URI = '/test-execution';
export const TEST_SUITE_CREATE_URI = `${TEST_SUITE_URI}/create`;
export const TEST_SUITE_EDIT_URI = `${TEST_SUITE_URI}/edit`;
export const TEST_SUITE_VIEW_URI = `${TEST_SUITE_URI}/view`;
export const TEST_SUITE_VIEW_HISTORY_URI = `${TEST_SUITE_URI}/viewHistory`;
export const TEST_SUITE_CHANGE_CASES_URI = id =>
  `${TEST_SUITE_URI}/${id}/change-cases`;

export const TEST_CASE_MANAGEMENT = '/test-case';

export const TEST_REPORT_MANAGEMENT = '/test-report';

export const DASHBOARD_URI = '/dashboard';
export const TESTPLAN_URI = '/test-plan';

export const TEST_EXECUTION_MANAGEMENT_URI = `${TEST_SUITE_URI}/execution`;
export const NOT_ACCESS_URI = '/not-access';
export const NOT_FOUND_URI = '/not-found';

export const UPDATE_PASSWORD_URL = '/update-password';
