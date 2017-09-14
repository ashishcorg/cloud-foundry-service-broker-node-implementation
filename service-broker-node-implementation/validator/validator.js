var joi = require('joi');

this.serviceInstanceCreateRequestValidator={
		body: {
			service_id: joi.required(),
			plan_id: joi.required(),
			space_guid: joi.required()
		  }
};
this.serviceInstanceUpdateRequestValidator={
		body: {
			service_id: joi.required()
		  }
};
this.deleteRequestValidator={
		query: {
			service_id: joi.required(),
			plan_id: joi.required()
		  }
};
this.bindServiceInstanceRequestValidator={
		body: {
			service_id: joi.required(),
			plan_id: joi.required()
		  }
};
module.exports = this;