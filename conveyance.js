var createObject, extendObject,
  sayHello, makeConveyance,
  automobilePrototype, makeAutomobile, chargerAutomobile,
  airplanePrototype, makeAirplane, cessnaAirplane, raptorAirplane;
// ** Utility function to set inheritance
// Cross-browser method to inherit Object.create()
// Newer js engines (v1.8.5+) support it natively
var objectCreate = function ( arg ) {
  if ( ! arg ) { return {}; }
  function obj() {};
  obj.prototype = arg;
  return new obj;
  };

Object.create = Object.create || objectCreate;

// ** Utility function to extend an object
extendObject = function ( orig_obj, ext_obj ) {
  var key_name;
  for ( key_name in ext_obj ) {
  if ( ext_obj.hasOwnProperty( key_name ) ) {
    orig_obj[ key_name]=ext_obj[ key_name ];
    }
  }
};

// ** object methods...
sayHello = function () {
  print( 'I am a ' + this.manufacturer + 
		 ' ' + this.model + ' and i go ' + this.make_sound );
  };

// ** makeconveyance constructor
makeConveyance = function ( arg_map ) {
  var vehicle = {
    is_propelled : true,
    occupancy_count : 1,
    is_still_made : true,
    manufacturer : 'anonymous',
    model : 'anonymous',
    say_hello : sayHello
    };
  extendObject( vehicle, arg_map );
  return vehicle;
  };

// ** use automobile constructor to create car prototype
automobilePrototype = makeConveyance({
  is_land_based : true,
  make_sound : 'vroom'
  });

// base prototype for all planes
airplanePrototype = makeConveyance({
  is_land_based : false,
  make_sound : 'woosh'
  });

// ** automobile constructor
makeAutomobile = function( arg_map ) {
  var automobile = Object.create( automobilePrototype );
  extendObject( automobile, arg_map );
  return automobile;
  };

// airplane constructer
makeAirplane = function( arg_map ) {
  var airplane = Object.create( airplanePrototype );
  extendObject( airplane, arg_map );
  return airplane;
  };

// ** cat instance
chargerAutomobile = makeAutomobile({
  manufacturer : 'Dodge',
  model : 'Charger',
  occupancy_count : 4,
  year : 1969
  });

// make a new instance of a dog
cessnaAirplane = makeAirplane({
  manufacturer : 'Cessna',
  model : '182D',
  year : 2016,
  occupancy_count : 4
  });

// make new instance of human aka ME
raptorAirplane = makeAirplane({
  manufacturer : 'Lockheed Martin',
  model : 'F-22 Raptor',
  year : 1997
  });

// ** cat instance method invocations
chargerAutomobile.say_hello();

// test new dog
cessnaAirplane.say_hello();

// test for new human instance
raptorAirplane.say_hello();

