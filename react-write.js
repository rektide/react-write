var
  ReactDOM= require( "react-dom"),
  Reactt= require( "reactt")

function ReactWrite( opts){
	var
	  container,
	  el,
	  tag
	function h(){
		var
		  element= Reactt.apply( null, arguments),
		  cont= container|| document.createElement( tag),
		  contentLoaded= new Promise( function( resolve, reject){
			try{
				ReactDOM.render( element, cont, resolve)
			}catch(err){
				reject(err)
			}
		  })
		if( el&& cont.parentNode!== el){
			el.appendChild( cont)
		}
		return contentLoaded
	}
	// directly invoked
	if( opts instanceof Array){
		return h.apply( null, arguments)
	}

	// typical path is an el, which is preserved, and added into with each tt
	if( !opts){
		el= document.body
	}else if( opts.container){
		container= opts.container
	}else if( opts instanceof HTMLElement){
		el= opts
	}else if( opts.el){
		el= opts.el
	}else{
		el= document.body
	}

	function _container( val){
		if( arguments.length=== 0){
			return container
		}
		container= val
		return this
	}
	Object.defineProperty( h, "container", {
		get: _container
	})

	function _el( val){
		if( arguments.length=== 0){
			return el
		}
		el= val
		return this
	}
	Object.defineProperty( h, "el", {
		get: _el
	})

	function _tag( val){
		if( arguments.length=== 0){
			return tag
		}
		tag= val
		return this
	}
	Object.defineProperty( h, "tag", {
		get: _tag
	})

	return h
}

module.exports = ReactWrite
module.exports.default= ReactWrite
