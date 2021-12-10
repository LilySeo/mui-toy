export default (palette: any) => {
  return {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            color: 'black',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            color: 'black',
          },
        },

      },
      // MuiDrawer: {
      //   styleOverrides: {
      //     root: {
      //       backgroundColor: 'red',
      //       color: 'black',
      //     },
      //   },
      // },
      // MuiCard: {
      //   defaultProps: {
      //     elevation: 0,
      //   },
      //   styleOverrides: {
      //     root: {
      //       borderRadius: '5px',
      //       border: '1px solid rgba(0, 0, 0, 0.05)',
      //       display: 'flex',
      //       flexDirection: 'column',
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //     },
      //   },
      // },
      // MuiTypography: {
      //   styleOverrides: {
      //     root: {
      //       color: palette.text.primary,
      //       marginBottom: '0px',
      //     },
      //     h1: {
      //       fontSize: '32px',
      //       fontWeight: 700,
      //     },
      //     subtitle1: {
      //       fontSize: '14px',
      //       fontWeight: 'normal',
      //       color: '#000100',
      //     },
      //     subtitle2: {
      //       fontSize: '14px',
      //       fontWeight: 'normal',
      //       color: 'rgba(0, 1, 0, 0.3)',
      //     },
      //   },
      // },
      // MuiButton: {
      //   styleOverrides: {
      //     root: {
      //       fontSize: '14px',
      //       fontWeight: 700,
      //     },
      //   },
      // },
      // MuiIconButton: {
      //   styleOverrides: {
      //     root: {
      //       padding: '0px',
      //     },
      //     sizeLarge: {
      //       width: '32px',
      //       height: '32px',
      //     },
      //     sizeMedium: {
      //       width: '24px',
      //       height: '24px',
      //     },
      //   },
      // },
      // MuiTextField: {
      //   styleOverrides: {
      //     root: {
      //       border: '0px',
      //     },
      //   },
      // },
      // MuiFilledInput: {
      //   styleOverrides: {
      //     root: {
      //       backgroundColor: '#F2F2F2',
      //       borderRadius: '10px',
      //       '&:before': {
      //         border: '0px',
      //       },
      //     },
      //     input: {
      //       padding: 10,
      //       '&:hover': {
      //         border: '0px',
      //       },
      //     },
      //   },
      // },
      MuiSvgIcon: {
        styleOverrides: {
          fontSizeLarge: {
            fontSize: '32px',
          },
          fontSizeMedium: {
            fontSize: '24px',
          },
        },
      },
      // MuiDrawer: {
      //   styleOverrides: {
      //     paper: {
      //       width: '300px',
      //     },
      //   },
      // },
      // MuiList: {
      //   styleOverrides: {
      //     root: {
      //       padding: '20px',
      //     },
      //   },
      // },
      // MuiListItemIcon: {
      //   styleOverrides: {
      //     root: {
      //       padding: '8px 10px',
      //     },
      //   },
      // },
      // MuiListItem: {
      //   styleOverrides: {
      //     root: {
      //       borderRadius: '10px',
      //       cursor: 'pointer',
      //       '&:hover': {
      //         backgroundColor: '#CCC',
      //       },
      //       ['&.Mui-selected']: {
      //         color: 'white',
      //         fontWeight: 700,
      //         backgroundColor: '#CCC',
      //       },
      //     },
      //   },
      // },
      // MuiTableRow: {
      //   styleOverrides: {
      //     root: {
      //       boxSizing: 'border-box',
      //       borderBottom: '1px solid #E5E5E5',
      //     },
      //   },
      // },
      // MuiMenu: {
      //   styleOverrides: {
      //     root: {
      //       borderRadius: '15px',
      //     },
      //   },
      // },
      // MuiTable: {
      //   styleOverrides: {
      //     root: {
      //       borderCollapse: 'separate',
      //     },
      //   },
      // },
      // MuiTableHead: {
      //   styleOverrides: {
      //     root: {
      //       padding: '8px 16px',
      //       backgroundColor: '#ECEEEF',
      //       color: 'white',
      //       ['& .MuiTableCell-root']: {
      //         color: palette.text.time,
      //         fontSize: '12px',
      //       },
      //     },
      //   },
      // },
    },
  };
};
