const dark = () => {
  return {
    backgroundColor: '#6b6b47',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    width: '100vw'
  };
};
const light = () => {
  return {
    backgroundColor: '#c2c2a3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    width: '100vw'
  };
};
const normal = () => {
  return {
    backgroundColor: '#adad85',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    width: '100vw'
  };
};

const buildDark = () => {
  return {
    view: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      margin: '1em'
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignContent: 'center',
      fontSize: '10px'
    },
    menuRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      margin: '1em'
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1em'
    },
    appBackground: dark(),
    themeSelector: {
      light: {
        border: '2px solid #c2c2a3',
        backgroundColor: 'transparent',
        outlineColor: '#c2c2a3',
        marginLeft: '1em'
      },
      normal: {
        border: '2px solid #adad85',
        backgroundColor: 'transparent',
        outlineColor: '#adad85',
        marginLeft: '1em'
      },
      dark: {
        border: '2px solid #6b6b47',
        backgroundColor: 'transparent',
        outlineColor: '#6b6b47',
        marginRight: '1em',
        marginLeft: '1em'
      }
    },
    returnBack: {
      border: '2px solid #cc00cc',
      outlineColor: '#cc00cc',
      backgroundColor: 'transparent',
      marginRight: '1em',
      marginLeft: '1em'
    },
    boy: {
      color: '#ec4e19',
      border: '2px solid #ec4e19',
      outlineColor: '#ec4e19',
      backgroundColor: 'transparent',
      margin: '0.5em'
    },
    girl: {
      color: '#009973',
      border: '2px solid #009973',
      outlineColor: '#009973',
      backgroundColor: 'transparent',
      margin: '0.5em'
    }
  };
};
const buildNormal = () => {
  return {
    view: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      margin: '1em'
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignContent: 'center',
      fontSize: '10px'
    },
    menuRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      margin: '1em'
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1em'
    },
    appBackground: normal(),
    themeSelector: {
      light: {
        border: '2px solid #c2c2a3',
        backgroundColor: 'transparent',
        outlineColor: '#c2c2a3',
        marginLeft: '1em'
      },
      normal: {
        border: '2px solid #adad85',
        backgroundColor: 'transparent',
        outlineColor: '#adad85',
        marginLeft: '1em'
      },
      dark: {
        border: '2px solid #6b6b47',
        backgroundColor: 'transparent',
        outlineColor: '#6b6b47',
        marginRight: '1em',
        marginLeft: '1em'
      }
    },
    returnBack: {
      border: '2px solid #cc00cc',
      outlineColor: '#cc00cc',
      backgroundColor: 'transparent',
      marginRight: '1em',
      marginLeft: '1em'
    },
    boy: {
      color: '#ec4e19',
      border: '2px solid #ec4e19',
      outlineColor: '#ec4e19',
      backgroundColor: 'transparent',
      margin: '0.5em'
    },
    girl: {
      color: '#009973',
      border: '2px solid #009973',
      outlineColor: '#009973',
      backgroundColor: 'transparent',
      margin: '0.5em'
    }
  };
};
const buildLight = () => {
    return {
      view: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        margin: '1em'
      },
      footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: '10px'
      },
      menuRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        margin: '1em'
      },
      content: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1em'
      },
      appBackground: light(),
      themeSelector: {
        light: {
          border: '2px solid #c2c2a3',
          backgroundColor: 'transparent',
          outlineColor: '#c2c2a3',
          marginLeft: '1em'
        },
        normal: {
          border: '2px solid #adad85',
          backgroundColor: 'transparent',
          outlineColor: '#adad85',
          marginLeft: '1em'
        },
        dark: {
          border: '2px solid #6b6b47',
          backgroundColor: 'transparent',
          outlineColor: '#6b6b47',
          marginRight: '1em',
          marginLeft: '1em'
        }
      },
      returnBack: {
        border: '2px solid #cc00cc',
        outlineColor: '#cc00cc',
        backgroundColor: 'transparent',
        marginRight: '1em',
        marginLeft: '1em'
      },
      boy: {
        color: '#ec4e19',
        border: '2px solid #ec4e19',
        outlineColor: '#ec4e19',
        backgroundColor: 'transparent',
        margin: '0.5em'
      },
      girl: {
        color: '#009973',
        border: '2px solid #009973',
        outlineColor: '#009973',
        backgroundColor: 'transparent',
        margin: '0.5em'
      }
    };
};

const Styles = () => {
  return {
    lightTheme: buildLight(),
    normalTheme: buildNormal(),
    darkTheme: buildDark()
  };
};

export default Styles;