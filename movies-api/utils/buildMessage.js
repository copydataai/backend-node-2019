function buildMessage(entity, action) {
  if (action === 'list' && action === 'retrieve') {
    return `${entity} ${action}ed`;
  }
  return `${entity} ${action}d`;
}

module.exports = buildMessage;
