const uniqueId = function() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

export default uniqueId;