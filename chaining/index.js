const chainObj = {
    num:0,
    one: function() {
        console.log('one');
        return this;
    },
    two: function() {
        console.log('two');
        return this;
    },
    numPlus: function () {
        this.num++;
        console.log(this.num);
        return this;
    }
};

chainObj
  .numPlus()
  .numPlus();