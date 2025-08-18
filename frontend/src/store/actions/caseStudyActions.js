import axios from "axios";

export const listCaseStudy = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "CASESTUDY_LIST_REQUEST" });
      const { data } = await axios.get(`/api/caseStudies`);
      dispatch({ type: "CASESTUDY_LIST_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "CASESTUDY_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const listCaseStudyDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "CASESTUDY_DETAILS_REQUEST" });
      const { data } = await axios.get(`/api/caseStudies/${id}`);
      dispatch({ type: "CASESTUDY_DETAILS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "CASESTUDY_DETAILS_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const deleteCaseStudy = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "CASESTUDY_DELETE_REQUEST",
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.delete(`/api/caseStudies/${id}`, config);
      dispatch({
        type: "CASESTUDY_DELETE_SUCCESS",
      });
    } catch (error) {
      dispatch({
        type: "CASESTUDY_DELETE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const createCaseStudy = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "CASESTUDY_CREATE_REQUEST",
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(`/api/caseStudies`, {}, config);

      dispatch({
        type: "CASESTUDY_CREATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "CASESTUDY_CREATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const updateCaseStudy = (caseStudy) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "CASESTUDY_UPDATE_REQUEST",
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        "Content-Type": "application/json",
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `/api/caseStudies/${caseStudy._id}`,
        caseStudy,
        config
      );

      dispatch({
        type: "CASESTUDY_UPDATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "CASESTUDY_UPDATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
