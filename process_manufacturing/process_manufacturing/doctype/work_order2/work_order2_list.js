frappe.listview_settings['Work Order2'] = {
	add_fields: ["status"],
	filters: [["status", "!=", "Cancelled"]],
	get_indicator: function(doc) {
		if(doc.status==="Submitted") {
			return [__("Not Started"), "orange", "status,=,Submitted"];
		} else {
			return [__(doc.status), {
				"Draft": "red",
				"Not Started": "red",
				"In Process": "orange",
				"Completed": "green",
				"Cancelled": "darkgrey"
			}[doc.status], "status,=," + doc.status];
		}
	}
};
