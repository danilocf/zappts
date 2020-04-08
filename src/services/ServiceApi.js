import Api from "@/services/Api";
import MockAdapter from "axios-mock-adapter";
import Mock from "@/services/ServiceApi.mock";
const options = { baseURL: process.env.VUE_APP_API_URL };

const makeRequest = ({
  url = null,
  mockResponse = null,
  apiMethod = null,
  apiPayload = null
}) => {
  const NormalApi = Api(options);
  const MockApi = Api(options);
  const mock = new MockAdapter(MockApi, { delayResponse: 1300 });
  const useMock = process.env.VUE_APP_MOCK === "true";
  const selectedApi = useMock && mockResponse ? MockApi : NormalApi;
  const mockMethods = {
    post: "onPost"
  };
  if (mockResponse) {
    const mockMethod = mockMethods[apiMethod];
    mock[mockMethod](url).reply(() => mockResponse);
  }
  return selectedApi[apiMethod](url, apiPayload);
};

export default {
  postSignIn({ user = null, password = null }) {
    return makeRequest({
      url: `/sign-in`,
      apiMethod: "post",
      apiPayload: {
        user,
        password
      },
      mockResponse: Mock.postSignIn
    });
  },

  postSignUp({ fullname = null, user = null, password = null }) {
    return makeRequest({
      url: `/sign-up`,
      apiMethod: "post",
      apiPayload: {
        fullname,
        user,
        password
      },
      mockResponse: Mock.postSignUp
    });
  }
};
