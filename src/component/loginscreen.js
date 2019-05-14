import React,{Component} from 'react';
import {
    Platform,
    Alert
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
import {StackActions, NavigationActions } from 'react-navigation';



export default class Login extends Component{
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false,
            isValid: true
        }
    }

    validateEmail(username, password){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(username)){
            if(password != ''){
                if(username === "prashant@gmail.com" && password === "prashant123"){
                    var token = 'tokengenerate';
                    this.setState({
                        username:'',
                        password:''
                    });
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
                      });
                      this.props.navigation.dispatch(resetAction);
                } else{
                    Alert.alert('Inavalid username and password');
                    this.setState({
                        username:'',
                        password:''
                    })
                }
            } else{
                Alert.alert('Please enter the password');
                this.setState({
                    username:'',
                    password:''
                })
            }
        } else{
            Alert.alert('Please enter valid email id.')
            this.setState({
                username:'',
                password:''
            })
        }
    }

    clickLoginButton(username, password){
        this.validateEmail(username, password);
    }

    render(){
        return(
            <Container >
                <Header>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <FormItem floatingLabel style={[!this.state.isValid ? borderColor='red' : null]}>
                            <Label>Email</Label>
                            <Input 
                                // value={this.state.username}
                                onChangeText={(username)=>this.setState({username})}
                            />
                        </FormItem>
                        <FormItem floatingLabel last>
                            <Label>Password</Label>
                            <Input 
                                // value={this.state.password}
                                onChangeText={(password)=>this.setState({password})}
                                secureTextEntry={true} 
                            />
                        </FormItem>
                    </Form>
                </Content> 
                <Content style={{margin:10}}>
                    <Button full primary style={{ paddingBottom: 4 }} onPress={()=> this.clickLoginButton(this.state.username, this.state.password)}>
                        <Text> Login </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}