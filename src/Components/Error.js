import React from 'react';

function Error({errorThrown}) {
	if (errorThrown === '') {
		return <div></div>
	} else {
		return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{errorThrown}</div>
	}
}

export default Error;
