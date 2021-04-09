import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import '../style/footer.css'

function Footer() {
    return (
        <div >
            <div>
                <ul className="footer menu-list" >
                    <li>드래곤셀러 소개</li>
                    <li>이용약관</li>
                    <li>개인정보취급방침</li>
                    <li>문의하기</li>
                    <li>공지사항</li>
                    <li>버그제보</li>
                </ul>
            </div>
            <Button  circular color='facebook'>
                <Icon name='facebook' />
                <a style={{color:'white'}} target="_blank" href ="https://facebook.com">Facebook
                </a>
                </Button>
            <Button circular color='twitter'>
                <Icon name='twitter' />
                <a style={{color:'white'}} target="_blank" href ="https://twitter.com" >Twitter
                </a> 
            </Button>
            <Button circular color='instagram'>
                <Icon name='instagram' />
                <a style={{color:'white'}} target="_blank" href ="https://Instagram.com" >Instagram
                </a>
            </Button>
            <Button circular color='youtube'>
                <Icon name='youtube' />
                <a style={{color:'white'}} target="_blank" href ="https://youtube.com" >YouTube
                </a>
            </Button>
        </div>
    )
}

export default Footer
