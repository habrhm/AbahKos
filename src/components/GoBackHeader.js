import React, {
    Component
} from 'react'
import {
    TouchableNativeFeedback,
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    View
} from 'native-base'


export default class GoBackHeader extends Component {
    render() {
        return (
            <Header style={{
                backgroundColor: 'white'
            }}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-back' style={{ color: '#43A047' }} />
                    </Button>
                </Left>
                <Body>
                    <Title style={{ color: 'green' }}></Title>
                </Body>

            </Header>
        )
    }
}