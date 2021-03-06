import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
	--detail: #fff;
	--background: #F2F3F5;
	--gray-line: #DCDDE0;
	--text: #666666;
	--text-highlight: #B3B9FF;
	--title: #2E384D;
	--red: #E83F5B;
	--red-dark: #9B2A3C;
	--green: #4CD62B;
	--green-dark: #30891B;
	--blue: #794BC4;
	--blue-dark: #613C9D;
	--blue-twitter: #2aa9E0;
	--shadow: rgba(0, 0, 0, 0.05);
	--button-text: #fff;
	--border-number: #f0f1f3;
	--overlay: rgba(242, 243, 245, 0.8);


	--dark-detail: #121212;
	--dark-background: #000;
	--dark-gray-line: #DCDDE0;
	--dark-text: #fff;
	--dark-text-highlight: #B3B9FF;
	--dark-title: #ddd;
	--dark-red: #E83F5B;
	--dark-red-dark: #9B2A3C;
	--dark-green: #4CD62B;
	--dark-green-dark: #30891B;
	--dark-blue: #794BC4;
	--dark-blue-dark: #613C9D;
	--dark-blue-twitter: #2aa9E0;
	--dark-shadow: rgba(255, 255, 255, 0.05);
	--dark-button-text: #fff;
	--dark-border-number: #f0f1f3;
	--dark-overlay: rgba(42, 43, 45, 0.8);
} 
    @media(max-width: 1080px) {
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px) {
        html{
            font-size: 87.5%;
        }
    }
	@media(max-height: 625px) {
		html {
			font-size: 86%;
		}
	}
	body {
        background: var(--dark-background);
        color: var(--dark-text);
    }
	
    body, input, textarea, button {
        font: 400 1rem "Inter", sans-serif;
    }
    button {
        cursor: pointer;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;