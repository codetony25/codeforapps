import uuid from 'node-uuid';

const assignUUID = (item) => {
  item.uuid = uuid.v4();
};

// Add a delay to test slower connections
export function addDelay(delay) {
  return (hook, next) => {
    setTimeout(next, delay);
  };
}

// Apply timestamp to keep track of date
export function timestamp(name) {
  return (hook, next) => {
    const data = hook.data;
    data[name] = new Date();
    next();
  };
}

/**
 * Add different key identifiers in case we are
 * looping through a list in our react components
 */
export function setUUID() {
  return (hook, next) => {
    const data = hook.data;

    if (Array.isArray(data)) {
      data.map(item => assignUUID(item));
      return next();
    }

    assignUUID(data);
    return next();
  };
}
