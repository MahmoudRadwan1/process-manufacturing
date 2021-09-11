frappe.ui.form.on('Stock Entry', {
	onload_post_render(frm) {
    	frm.set_value('stock_entry_multiplier',flt(frm.doc.total_outgoing_value/frm.doc.total_outgoing_value))
frm.save()	
}
})
