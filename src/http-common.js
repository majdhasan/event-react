import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
});

async function getUser() {
  let response = await axios.get(`http://localhost:4000/api/v1/test`, config);
  return response.data.user;
}

async function getUsername() {
  let response = await axios.get(`http://localhost:4000/api/v1/test`, config);
  return response.data.user.username;
}

async function getConversations() {
  let response = await axios.get(`http://localhost:4000/api/v1/test`, config);
  return response.data.user.conversations;
}

async function getMessages(conversationId) {
  let response = await axios.get(
    `http://localhost:4000/api/v1//chat/${conversationId}`,
    config
  );
  return response;
}

async function addNewEvent(event) {
  let response = await axios.post(
    `http://localhost:4000/api/v1//event`,
    event,
    config
  );
  return response;
}

async function getEvents() {
  let response = await axios.get(
    `http://localhost:4000/api/v1//event`,
    config
  );
  return response.data;
}

async function loginUser(userData) {
  let response = await axios.post(
    `http://localhost:4000/api/v1/login`,
    userData
  );
  return response;
}

async function deleteEvent(eventId) {
  let response = await axios.delete(
    `http://localhost:4000/api/v1/event?id=${eventId}`,
    config
  );
  return response
}


export {
  config,
  axiosClient,
  getUsername,
  getConversations,
  getMessages,
  addNewEvent,
  loginUser,
  getUser,
  getEvents,
  deleteEvent
};
