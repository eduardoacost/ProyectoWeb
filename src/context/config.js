
const SOCKET_URL = URL('http://localhost:4000');

export const socket = socketio.connect(SOCKET_URL);