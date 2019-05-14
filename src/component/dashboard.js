import React,{Component} from 'react';
import {
    Platform,
    View,
    FlatList,
    Modal,
    StyleSheet
} from 'react-native';
import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Form,
    Item as FormItem,
    Input,
    Label,
    Title,
    Content,
    Footer
} from 'native-base';


export default class Dashboard extends Component{
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dashboardListData: ''
        }
    }

    componentDidMount(){
        this.setState({isLoading: true})
        this.getListData();
    }

    getListData(){
        this.setState({
            dashboardListData:[
                {
                    "id":1,
                    "name":"test1",
                    "age" : "11",
                    "gender":"male",
                    "email" : "test1@gmail.com",
                    "phoneNo" : "9738452245"
                },
                {
                    "id" : 2,
                    "name":"test2",
                    "age" : "12",
                    "gender":"male",
                    "email" : "test2@gmail.com",
                    "phoneNo" : "9738452245"
                },
                {
                    "id":3,
                    "name":"test3",
                    "age" : "13",
                    "gender":"male",
                    "email" : "test3@gmail.com",
                    "phoneNo" : "9738452245"
                },
                {
                    "id":4,
                    "name":"test4",
                    "age" : "14",
                    "gender":"male",
                    "email" : "test4@gmail.com",
                    "phoneNo" : "9738452245"
                },
                {
                    "id":5,
                    "name":"test5",
                    "age" : "15",
                    "gender":"male",
                    "email" : "test5@gmail.com",
                    "phoneNo" : "9738452245"
                },
                {
                    "id":6,
                    "name":"test6",
                    "age" : "16",
                    "gender":"male",
                    "email" : "test6@gmail.com",
                    "phoneNo" : "9738452245"
                },
                {
                    "id":7,
                    "name":"test7",
                    "age" : "16",
                    "gender":"male",
                    "email" : "test7@gmail.com",
                    "phoneNo" : "9738452245"
                }
            ],
            isLoading: false
        })
    }

    showUserDashListValue(){
        if(this.state.dashboardListData.length>0){
            return(
                <FlatList
                    data={this.state.dashboardListData}
                    renderItem={({ item }) => (
                        <View elevation={2} style={{flex: 1,height: 75, backgroundColor: "#fff",borderColor: "#fff", margin: 5}}>
                            <View style={{flex:1, flexDirection: 'row'}}>
                                <View style={{flex:1, justifyContent: 'center', paddingLeft: 5}}>
                                    <Text>{item.name}</Text>
                                </View>  
                                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                                    <Text>{item.age}</Text>
                                </View>  
                                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                                    <Text>{item.gender}</Text>
                                </View>  
                            </View>
                            <View style={{flex:1, flexDirection: 'row'}}>
                                <View style={{flex:1, justifyContent: 'center', paddingLeft: 5}}>
                                    <Text>{item.email}</Text>
                                </View>  
                                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                                    <Text>{item.phoneNo}</Text>
                                </View>  
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            )
        } else{
            return(
                <View style={{justifyContent: 'center'}}>
                    <Text>No data available</Text>
                </View>
            )
        }
    }

    render(){
        if(this.state.isLoading){
            return(
                <Modal
                    transparent={true}
                    animationType={'none'}
                    visible={loading}
                    onRequestClose={() => {console.log('close modal')}}>
                    <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator
                        animating={loading} />
                    </View>
                    </View>
                </Modal> 
            )
        } else{
            return(
                <Container >
                    <Header>
                        <Body>
                            <Title>Dashboard</Title>
                        </Body>
                    </Header>
                    <Content>
                        {this.showUserDashListValue()}
                    </Content>
                </Container>
            );
        }
    }
}

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      height: 100,
      width: 100,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  });