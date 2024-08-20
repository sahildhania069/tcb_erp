// frappe.ready(function () {

//     // bind events here
//     if (frappe.session.user) {
//         frappe.web_form.set_value('custom_user', frappe.session.user);

//     }

//     if (frappe.session.user) {
//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Customer',
//                 fields: ['name'],
//                 filters: [
//                     ['Portal User', 'user', '=', frappe.session.user]
//                 ],
//                 limit: 1
//             },
//             callback: function (response) {
//                 if (response.message && response.message.length > 0) {
//                     var customer = response.message[0].name;
//                     console.log(response.message)
//                     frappe.web_form.set_value('customer', customer);
//                     console.log('Customer set to:', customer);




//                     frappe.call({
//                         method: 'frappe.client.get_list',
//                         args: {
//                             doctype: 'Project',
//                             fields: ['name', 'project_name'],
//                             filters: [
//                                 ['customer', '=', customer]
//                             ]
//                         },
//                         callback: function (r) {
//                             if (r.message) {
//                                 console.log('Projects for this customer:', r.message);
//                                 // You can now use this list to populate your project field
//                                 // For example:
//                                 var options = r.message.map(function (project) {
//                                     return { value: project.name, label: project.project_name };
//                                 });
//                                 // frappe.web_form.set_df_property('project', 'options', options);
//                                 frappe.web_form.fields_dict["project"].set_data([...options])
//                             } else {
//                                 console.log('No projects found for this customer');
//                             }
//                         }
//                     });
//                 } else {
//                     console.log('No matching customer found for the current user');
//                 }
//             }
//         })
//     }

// });
