module.exports = {
  copy: function(obj){
      if(typeof obj !== 'object') { throw new Error('Item to copy must be an object.'); }
      else { return JSON.parse(JSON.stringify(obj)); }
  }
};