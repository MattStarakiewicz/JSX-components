var Contacts = React.createClass({
    propTypes: {
      items: React.PropTypes.array.isRequired,
    },
  
    render: function() {
      contacts = this.props.items.map(function(contact) {
      <Contact item={contact} key={contact.id} />
      });
  
      return (
        <ul className='contactsList'>contacts</ul>
      );
    }
  });