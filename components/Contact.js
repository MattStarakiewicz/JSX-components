var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className={'contactItem'}>
          <img className={'contactImage'} src={'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-256.png'}/>
          <p className={'contactLabel'}>
               Imię i Nazwisko: {this.props.contact.firstName}
          </p>
          <p className={'contactLabel'}>
               : {'' + this.props.item.lastName}
          </p>
          <a href={'mailto:' + this.props.item.email}>
              {this.props.item.email}
          </a>
        </div>
        )
    },
  });