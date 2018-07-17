/* eslint-disable */
export default {
    /**
	  * 时间戳转化为日期
	  * @param time 时间戳
	  * @param return
	*/
	changeToDate: function (time, hasMinutes = false) {
		try {
			var tempTime = new Date(parseInt(time));
			var tempDate = [tempTime.getFullYear(), (parseInt(tempTime.getMonth() + 1) > 9 ? (tempTime.getMonth() + 1) : ("0" + (tempTime.getMonth() + 1))), (parseInt(tempTime.getDate()) > 9 ? tempTime.getDate() : ("0" + tempTime.getDate()))].join('-');
			if (hasMinutes) {
				var date = tempDate + " " + (parseInt(tempTime.getHours()) > 9 ? tempTime.getHours() : ("0" + tempTime.getHours())) + ":" + (parseInt(tempTime.getMinutes()) > 9 ? tempTime.getMinutes() : ("0" + tempTime.getMinutes())) + ":" + (parseInt(tempTime.getSeconds()) > 9 ? tempTime.getSeconds() : ("0" + tempTime.getSeconds()));
				return date;
			}
			return tempDate;
		} catch (e) {
			return '';
		}
	},
	/**
	 * 日期转化为时间戳
	 * @param dataStr 时间，格式为：'2018-07-10 10:21:12'
	 */
	dataToTimestamp(dataStr) {
		var timestamp2 = Date.parse(new Date(dataStr));
		//timestamp2 = timestamp2 / 1000;
		return timestamp2;
	},
	/**
	 * 表单提交
	 * @param name 表单ref
	 */
	handleSubmit(self,name) {
		let isCorrect;
		self.$refs[name].validate(valid => {
			isCorrect = valid;
		});
		return isCorrect;
	},
	/**
	 * 表单重置
	 * @param name 表单ref
	 */
	handleReset(self,name) {
		self.$refs[name].resetFields();
	}
}