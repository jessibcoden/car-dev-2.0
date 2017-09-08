app.factory("DataFactory", function($q, $http, FIREBASE_CONFIG){


	const getCohorts = () => {
    const cohorts = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/cohorts.json`)
				.then((fbItems) => {
					let itemCollection = fbItems.data;
          if(itemCollection !== null ){
	          Object.keys(itemCollection).forEach((key) => {
	            itemCollection[key].id=key;
	            cohorts.push(itemCollection[key]);
	          });
          }
          resolve(itemz);
				})
				.catch((error) => {
					reject(error);
				});
		});
  }

	return {getCohorts};


});
