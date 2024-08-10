function Phone(props) {
    const {contact, phone, phones, setPhones} = props;

    async function deletePhone() {
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/phones/' + phone.id, {
            method: 'DELETE',
        });

        let newPhones = phones.filter((p) => {
            return p.id !== phone.id;
        });

        setPhones(newPhones);
    }

	return (
		<tr>
            <td>{ phone.name }</td>
            <td>{ phone.number }</td>
            <td style={
                {
                    width: '14px',
                }
            }><button className="button red" onClick={deletePhone}>Delete</button></td>
        </tr>
	);
}

export default Phone;
