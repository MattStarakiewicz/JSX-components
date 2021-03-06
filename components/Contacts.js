var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var items = this.props.items.map(function(contact) {
      return <Contact item={contact} key={contact.id} />
    });

    return (
      <ul className='contactsList'>{items}</ul>
    );
  }
});