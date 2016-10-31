describe('grandpa', function() {
  it ('should have the correct answers', function() {
    expect(scopeArray1).toEqual(jasmine.any(Array));
    expect(scopeArray1).toContain('grandpa', 'uncle', 'cousin');
    expect(scopeArray2).toContain('dad', 'son');
    expect(scopeArray3).toContain('grandpa', 'dad', 'son');
    expect(scopeArray4).toContain('uncle', 'cousin');
    expect(scopeArray5).toContain('son');
  })
})

describe('async', function() {
  it('should exist', function() {
    expect(async).toEqual(jasmine.any(Function))
  })

  it('should not change foo before timeout', function() {
    var foo;
    async();
    expect(foo).toEqual(undefined);
  })

  it('should return a promise', function() {
    expect(async().then).toEqual(jasmine.any(Function))
  })

  it('should change foo after promise', function(done) {
    foo = undefined;
    async().then(function(res) {
      expect(foo).toEqual('bar');
      done();
    })
  })
})


describe('context1', function() {

  var getNum = function() {
    return Math.floor(Math.random() * 100);
  }

  it('should exist', function() {
    expect(context1).toEqual(jasmine.any(Function));
  })

  it('should correctly assign context', function() {
    // var getNum = function() {
    //   Math.floor(Math.random() * 100);
    // }
    var num = getNum();
    var num2 = getNum(), num3 = getNum();
    var obj = {num: num};
    function sum(a, b) {
      return this.num + a + b;
    }
    var result = context1(sum, obj, num2, num3);
    expect(result).toEqual(num + num2 + num3);
  })
})

describe('context2', function() {
  var getNum = function() {
    return Math.floor(Math.random() * 100);
  }

  it('should exist', function() {
    expect(context2).toEqual(jasmine.any(Function));
  })

  it('should correctly assign context', function() {
    var nums = [getNum(), getNum(), getNum()]
    console.log(nums);
    var num = getNum();
    var obj = {number: num};

    function sum(a, b, c) {
      return this.number + a + b + c;
    }
    var result = context2(sum, obj, nums);
    expect(result).toEqual(num + nums.reduce(function(a, b) {
      return a + b;
    }))
  })
})

describe('context3', function() {
  var getNum = function() {
    return Math.floor(Math.random() * 100);
  }
  it('should exist', function() {
    expect(context3).toEqual(jasmine.any(Function));
  })

  it('should return a function', function() {
    expect(context3(function() {})).toEqual(jasmine.any(Function))
  })

  it('should assign context correctly', function() {
    var obj = {
      num: getNum()
    };

    function get() {
      return this.num
    }

    expect(context3(get, obj)()).toEqual(obj.num)
  })
})

describe('Taco', function() {
  it('should exist', function() {
    expect(Taco).toEqual(jasmine.any(Function));
  })
  it('should be a constructor', function() {
    expect(new Taco()).toEqual(jasmine.any(Object));
  })

  it('should make a good Taco', function() {

    function getIngredients() {
      var shell = ['flour', 'corn', 'seaweed'];
      var meat = ['chicken', 'beef', 'pork'];
      var veggies = ['lettuce', 'tomato', 'onion'];
      var num = Math.floor(Math.random() * 3);
      return {
        shell: shell[num],
        meat: meat[num],
        veggies: veggies[num]
      }
    }

    var ingredients = getIngredients();

    expect(
      new Taco(ingredients[0], ingredients[1], ingredients[2])
    ).toEqual(jasmine.objectContaining(
      {
        shell: ingredients[0],
        meat: ingredients[1],
        veggies: ingredients[2]
      }
    ))
  })
})

describe('Burrito', function() {
  it('should exist', function() {
    expect(Burrito).toEqual(jasmine.any(Function));
  })

  it('should be a constructor', function() {
    expect(new Burrito()).toEqual(jasmine.any(Object));
  })

  it('should have a method called eat', function() {
    expect(new Burrito().eat).toEqual(jasmine.any(Function));
  })

  it('should subtract from percentLeft', function() {
    var californiaBurrito = new Burrito();
    californiaBurrito.eat();
    californiaBurrito.eat();
    expect(californiaBurrito.percentLeft).toEqual(50);
  })
})

describe('doubler', function () {
  it('should exist', function () {
    expect(Array.prototype.doubler).toEqual(jasmine.any(Function))
  });

  it('should double an array', function () {
    expect([1, 2, 3].doubler()).toEqual([2, 4, 6]);
  });
});

describe('Chimichanga', function() {
  it('should exist', function() {
    expect(Chimichanga).toEqual(jasmine.any(Function));
  })
  it('should be a constructor function', function() {
    expect(new Chimichanga()).toEqual(jasmine.any(Object));
  })

  it('should make a great chimichanga', function() {
    var mmm = new Chimichanga();

    mmm.eat();
    mmm.eat();

    expect(mmm.percentLeft).toEqual(60);
  })
})

describe('sentenceMachine', function() {
  it('should exist', function() {
    expect(sentenceMachine).toEqual(jasmine.any(Function))
  })

  it('should return a function', function() {
    expect(sentenceMachine()).toEqual(jasmine.any(Function))
  })
  //TODO: randomize sentences
  it('should smash two sentences together. *HULK SMASH!*', function() {
    expect(sentenceMachine('HULK ')('SMASH')).toEqual('HULK SMASH');
  })
})

describe('subway', function() {
  beforeEach(function() {
    this.names = ['Jeremy', 'Brack', 'Brett', 'Brian', 'Jess', 'Stephen'];
    this.ingredients = ['turkey', 'bacon', 'ham', 'swiss'];
    this.name = this.names[Math.floor(Math.random() * this.names.length)];
    this.ingredient = this.ingredients[Math.floor(Math.random() * this.ingredients.length)]
    this.order = subway(this.name);
  })
  it('should exist', function() {
    expect(subway).toEqual(jasmine.any(Function));
  })

  it('should return a function', function() {
    expect(subway("Brett")).toEqual(jasmine.any(Function))
  })

  it('should add ingredients', function() {
    var that = this;

    expect(this.order(this.ingredient))
      .toEqual(jasmine.objectContaining(
        {
          orderPerson: that.name,
          ingredients: [that.ingredient]
        }
      ))
  })

  it('should not get orders mixed up', function() {
    var newOrder = subway(this.names[Math.floor(Math.random() * this.names.length)])
    var originalOrder = this.order(this.ingredient);

    expect(newOrder).not.toEqual(originalOrder);
  })
})

describe('compareValues', function() {
  it('should exist', function() {
    expect(compareValues).toEqual(jasmine.any(Function))
  });

  it('should find exact matches', function() {
    expect(compareValues(7, 7)).toEqual("Exact match")
  });

  it('should find different types matches', function() {
    expect(compareValues(7, "7")).toEqual("Different types")
  });

  it('should find non-matches', function() {
    expect(compareValues(7, "97")).toEqual("Different values")
  });
})
