import {
  ENQUEUE_NOTIFICATION,
  DEQUEUE_NOTIFICATION,
} from "../../actions/notifications/notifications";

const intialState = {
  queue: [],
};

const notifications = (state = intialState, action) => {
  switch (action.type) {
    case ENQUEUE_NOTIFICATION:
      let notification = {
        success: action.success,
        message: action.message,
      };

      console.log([...state.queue, notification]);

      return {
        ...state,
        queue: [...state.queue, notification],
      };

    case DEQUEUE_NOTIFICATION:
      let queue = [...state.queue];
      queue.shift();

      return {
        ...state,
        queue: queue,
      };

    default:
      return state;
  }
};

export default notifications;
