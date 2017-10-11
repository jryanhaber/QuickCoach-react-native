import React from 'react';
import { View, Text, ListView, Image } from 'react-native';
import { connect } from 'react-redux';

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends React.Component {
  state: {
    dataSource: Object,
  };

  constructor(props) {
    super(props);
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/

    const dataObjects = [
      {
        id: 'listening',
        tags: 'listening state',
        title: 'Listening',
        description: 'Notice the quality of your listening',
        description_options: [
          'Notice the quality of your listening.',
          'Listen for the fullness of this moment.',
          'Listen for the emptiness of this moment.',
        ],
      },
      {
        id: 'tonglen',
        tags: 'tonglen state',
        title: 'Tonglen',
        description:
          'Notice your experience.  What you love about it, wish that for others.',
        description_options: [
          'Notice your experience.  What you love about it, wish that for others.',
          'Notice your experience, anything adverse about it.  Take it into your heart and wish for freedom of it for others.',
        ],
      },
      {
        id: 'being_with',
        tags: 'being_with state',
        title: 'Being with',
        description: 'Notice what you notice.',
        description_options: [
          'Notice what you notice.',
          'Notice your breath.',
          'Notice Your Sensations.',
          'Notice Your Emotions.',
          'Notice Your Thoughts.',
        ],
      },

      {
        id: 'being_with_emergence',
        tags: 'being_with_emergence state',
        title: 'Emergence',
        description: 'Notice what is emerging.',
        description_options: [
          'Notice what is emerging.',
          'Notice what is arising within',
          'Notice whats underneath what is arising within',
          'Notice what it is like to be with what is underneath your experience',
          'Notice what changes within this',
          'Notice what it is like to be with what is changing',
          'Notice the quality of your being with what is arising',
        ],
      },

      {
        id: 'being_with_quality',
        tags: 'being_with_quality state',
        title: 'Quality of Being ',
        description: 'Notice the quality of what you are aware of.',
        description_options: [
          'Notice what you notice.',
          'Notice the quality of what you are aware of.',
          'Notice your breath.',
          'Notice the quality of your breath.',
          'Notice Your Sensations.',
          'Notice the quality of your sensations.',
          'Notice Your Emotions.',
          'Notice what kind of mood you are in.',
          'Notice Your Thoughts.',
          'Notice how your thoughts are arising.',
        ],
      },
    ];

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    const ds = new ListView.DataSource({ rowHasChanged });

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow(rowData) {
    return (
      <Image
        source={require('../Custom/Header.png')}
        style={{
          flex: 1,
          width: null,
          height: null,
        }}>
        <View style={styles.row}>
          <Text style={styles.label}>{rowData.description}</Text>
        </View>
      </Image>
    );
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData() {
    return this.state.dataSource.getRowCount() === 0;
  }

  // Render a footer.
  renderFooter = () => {
    return <Text> - - </Text>;
  };

  render() {
    return (
      <Image
        source={require('../Custom/Background.png')}
        style={{
          flex: 1,
          width: null,
          height: null,
        }}>
        <View style={styles.container}>
          <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderFooter={this.renderFooter}
            enableEmptySections
            pageSize={15}
          />
        </View>
      </Image>
    );
  }
}

const mapStateToProps = state => {
  return {
    // ...redux state to props here
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
