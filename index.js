
module.exports = function(context, params) {
    const {a, b} = params;
    const result = sum(a, b);
    return {
        result
    }
}