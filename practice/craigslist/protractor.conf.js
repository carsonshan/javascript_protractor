/**
 * @author Zakir Sayed
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
  		'*multi-then.spec.js'
  		],
  directConnect: true
};