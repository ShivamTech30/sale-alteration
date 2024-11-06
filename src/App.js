import './App.css';
import { useState } from 'react';
import logo from "./assites/mainLogo.png"
import imagess from "./assites/iconss.jpeg"
import images1 from "./assites/iconss1.png"
import utube1 from "./assites/utube.svg"
import chatimage1 from "./assites/chatImage.svg"
import chatimage from "./assites/chatImage.png"
import fax from "./assites/fax.svg"
import play from "./assites/play.svg"
import signup from "./assites/up-sign.svg"
import shuffle from "./assites/shuffle.svg"
import logout from "./assites/logout.svg"










function App() {

  const [editMode, setEditMode] = useState(false)

  const [tableCount, setTableCount] = useState(0)

  const EditModeFun = () => {
    setEditMode((prev) => prev === "true" ? "false" : "true")
  }


  let buttons = [
    {
      butn: <span   >
        <span style={{ textDecoration: "underline" }}>N</span>
        ext
      </span>
    },
    {
      butn: <span >
        <span style={{ textDecoration: "underline" }}>M</span>
        odify
      </span>
    },
    {
      butn: <span >
        <span style={{ textDecoration: "underline" }}>P</span>
        rint
      </span>
    },
    {
      butn: <span >
        <span style={{ textDecoration: "underline" }}>D</span>
        elete
      </span>
    },
    {
      butn: <span >
        <span style={{ textDecoration: "underline" }}>C</span>
        encel
      </span>
    },
    {
      butn: <span >
        <span style={{ textDecoration: "underline" }}>V</span>
        iew
      </span>
    },
    {
      butn: <span >
        <span style={{ textDecoration: "underline" }}>A</span>
        mend
      </span>
    },
    {
      butn: <span >De
        <span style={{ textDecoration: "underline" }}>t</span>
        ail
      </span>
    },
    {
      butn: <span >
        <span style={{ textDecoration: "underline" }}>E</span>
        mail
      </span>
    },
    {
      butn: <span >E
        <span style={{ textDecoration: "underline" }}>x</span>
        it
      </span>
    },
    {
      butn: <span >P
        <span style={{ textDecoration: "underline" }}>r</span>
        evious
      </span>
    },
    {
      butn: <span >Co
        <span style={{ textDecoration: "underline" }}>u</span>
        rier
      </span>
    }
  ]

  const tableCountFun = (e) => {
    let count = e.target.value
    let array = []
    for (let index = 0; index < count; index++) {
      array.push(<tr contenteditable={editMode} className='editable-table' spellcheck="false">
        <td style={{ width: "252px", height: "40px" }} className='pl-[20px]'> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td>   </td>
        <td>   </td>


      </tr>)

    }
    setTableCount(array)

  }

  return (
    <div className="App">

      {/* <div className=' h-[223px] w-[230px] bg-[white] pb-[3px] mb-[200px] bg-[#497d70]   '>


        <img src={chatimage1} className='h-[130px] w-[140px]' />

        <div className='mt-[-20px] pl-[4px] text-[40px] font-[sans-serif] text-[#4b5b4b]  ' style={{ position: "absolute", top: "74px", left: "11px" }}>
          <b>   CHAT </b>
        </div>


      </div> */}

      {editMode == "true" && <div>
        <h2>
          <center>
            Edit Mode is Activated - Happy Edit &#128522;
          </center>
        </h2>
        <div className='input-txable' style={{ marginTop: "30px", marginBottom: "50px" }}>
          <center>
            <lable>Enter Table Size</lable>   <input type='number' onChange={(e) => tableCountFun(e)} placeholder='Enter table count' />
          </center>
        </div>
      </div>}



      <div style={{ display: "flex", backgroundColor: "#5d99c969" }} contenteditable={editMode}>
        <div  >
          <img src={logo} className='h-[20px]' />
        </div>
        <span contenteditable={editMode} style={{ margin: "0px 0 0 2px" }}>MARG ERP 9 +[Sliver 1 userjver 11/08/2023 ]</span>
      </div>
      <div contenteditable={editMode} style={{ height: "25px", marginTop: "5px" }}  >
        Marg
      </div>
      <div>



        <div className='flex' contenteditable={editMode}>

          <div className='w-[75%]  main-header-left  '>
            <header className='main-header'>


              <h4 contenteditable={editMode} className='text-[20px] mt-[-5px] pl-[20px]'>
                SALE ALTERATION

              </h4>

              <div className='flex'>
                <h4 contenteditable={editMode}>
                  07/02/2024
                </h4>
                <p contenteditable={editMode} className='pt-[10px] text-[white] pl-[3px] pr-[20px]'>
                  xczdc
                </p>
              </div>


            </header>
            <div className='main-left-contant' contenteditable={editMode}>
              <div>
                <div>
                  <div className='main-header-1 '  >
                    <h1 className='w-[39%] pl-[20px]'>Party Name : <span> CASH</span></h1>
                    <h1 className='w-[33%]'>Bill : <span> A002806</span>
                      <spna style={{ marginLeft: "60px" }} className="text-[blue]" > [CASH]</spna>
                    </h1>
                    <h1 className='text-color-header w-[34%]'>Date &nbsp;&nbsp;&nbsp;: <span > 17-09-2024</span> </h1>
                  </div>

                  <div className='main-header-1'>

                    <h1 className='text-color-header   w-[30%] pl-[20px]'>Patient F2 : <span className='text-color-header '> 1234567891</span></h1>
                    <h1 className='text-color-header   w-[40%]'>Name : <span className='text-color-header'> RAVI JI</span>
                    </h1>

                    <h1 className='text-color-header w-[33%]'>Address : <span className='text-color-header'> sdsdsds sdsds sdsds </span> </h1>
                  </div>

                  <div className='main-header-1'>
                    <h1 className='text-color-header w-[30%] pl-[20px]'>Patient F1 : <span className='text-color-header'>8619389030 </span></h1>
                    <h1 className='text-color-header w-[40%]'>Name : <span className='text-color-header'>DR VINOD KUMAR BOKADIA</span>
                    </h1>
                    <h1 className='text-color-header w-[33%]' >Reg.No. : <span className='text-color-header'>14176 &nbsp; </span> </h1>
                  </div>

                </div>
              </div>

              <div>



              </div>


              <div className='table-first'>
                <table>
                  <tr className='bg-[#cdd9db] '>
                    <td style={{ width: "252px", height: "20px" }} className=' pl-[20px] pb-[10px] '>PRODUCT</td>
                    <td className='  pb-[15px] '>PACK</td>
                    <td className='  pb-[15px] '>BATCH</td>
                    <td className='  pb-[15px] '>STRI</td>
                    <td className='  pb-[15px] '>TAB</td>
                    <td className='  pb-[15px] '> M.R.P./S</td>
                    <td className='  pb-[15px] '>AMOUNT</td>

                  </tr>

                </table>

                <table>


                  {tableCount != 0 && tableCount}




                </table>
                <div className='bottom-btn1'>
                  {buttons?.map((items, id) => {
                    console.log("hgsddjd", id)
                    return <button contenteditable={editMode} className={`${id == 0 ? "border-color" : ""} text-[20px]  bg-[#efefef]`}
                    >
                      {items?.butn}
                    </button>
                  })}
                </div>


                <div className='mid-body  flex'>
                  <div className=' w-[55%]'>
                    <div className='mid-body-left  '>
                      <h1 contenteditable={editMode} className='mt-[10px] pl-[20px] hiden-item '>
                        Item :
                      </h1>
                      <div className='border-bg'>

                      </div>
                      <div className='main-div-id-body-left'>
                        <p contenteditable={editMode} className='text-[white] bg-[#497d70] pl-[10px] text-xl pl-[20px]'>
                          BILLEVIES
                        </p>

                        <div className='pl-[20px] text-[18px] '>
                          <div className='flex w-[95%] mt-[10px]' style={{ justifyContent: "space-between" }}>
                            <p contenteditable={editMode}   > BILL TOTAL  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  </p> <p contenteditable={editMode} className='float-right'>560.00</p>
                          </div>
                          <div className='flex w-[95%]' style={{ justifyContent: "space-between" }}>
                            <p contenteditable={editMode} className='text-[green] font-[600] '> CASH RECEIVED  &nbsp; <span >:</span>  </p>
                            <p contenteditable={editMode} className='float-right'>560.00</p>
                          </div>

                          <div className='flex w-[95%] ' style={{ justifyContent: "space-between" }}>
                            <p contenteditable={editMode} > BALANCE  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  </p> <p contenteditable={editMode} className='float-right'>0.00</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <hr />
                  <div className='mid-body-right w-[45%] flex'>

                    <div className="vl mt-[10px]"> </div>



                    <div className='w-[40%]  pt-[10px] '  >
                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px]'>
                          MRP Value &nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          583.45
                        </div>
                      </div>

                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px]'>
                          Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          583.45
                        </div>
                      </div>
                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px]'>
                          dis 3.94% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          23.45
                        </div>
                      </div>
                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px]'>
                          Balance &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          5839245
                        </div>
                      </div>
                      <div>

                      </div>

                    </div>
                    <div className='w-[60%] mt-[10px] pr-[5px]'>
                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px] text-[#4c99d8]'>
                          VALUE OF GOODS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          583.45
                        </div>
                      </div>

                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px] text-[#4c99d8] '>
                          DISCOUNT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          583.45
                        </div>
                      </div>
                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px] text-[#4c99d8]'>
                          GST % &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          23.45
                        </div>
                      </div>
                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px] text-[#4c99d8]'>
                          BRK/EXP/REPT. A/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          0.00
                        </div>
                      </div>
                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px] text-[#4c99d8]'>
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          0.00
                        </div>
                      </div>
                      <div className='flex  ' style={{ justifyContent: "space-between" }}>
                        <div className='ml-[10px] text-[#4c99d8]'>
                          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </div>
                        <div>
                          0.00
                        </div>
                      </div>

                    </div>




                  </div>

                </div>

                <div className='h-[28px] bg-[#497d70] mt-[20px]   flex pr-[10px]' style={{ justifyContent: "space-between" }}>
                  <div className=' ' onClick={(e) => EditModeFun(e)}>
                    <img src={utube1} className='h-[59px] mt-[-7px] ml-[5px] ' />

                  </div>

                  <div className='flex mt-[5px]  '>
                    <div className=' h-[17px] w-[20px]   pb-[3px]    '>
                      <img src={shuffle} className='h-[18px] w-[30px]' />
                    </div>
                    <div>
                      <img src={chatimage} className='h-[18px] w-[30px] ml-[7px] pt-[2px]' />

                    </div>
                    <div className=' h-[17px] w-[20px]   pb-[3px]     '>
                      <img src={play} className='h-[18px] w-[20px] play-1' />
                    </div>
                    <div>
                      <img src={play} className='h-[18px] w-[20px] play-2 ' />

                    </div>

                    <div className=' h-[17px] w-[20px]   pb-[3px]   '>
                      <img src={signup} className='h-[18px] w-[20px] signup-1' />
                    </div>
                    <div>
                      <img src={signup} className='h-[18px] w-[20px] signup-2' />

                    </div>

                    <div>
                      <img src={fax} className='h-[18px] w-[20px]' />

                    </div>
                    <div>
                      <img src={logout} className='h-[18px] w-[20px]' />

                    </div>
                  </div>


                </div>
                {/* <div className=' h-[23px] w-[30px] bg-[white] pb-[3px] '>


                  <img src={chatimage} className='h-[18px] w-[30px]' />
                  

                </div> */}
                <div>
                  <div className='flex ml-[20px] mr-[40px]' style={{ justifyContent: "space-between" }}>
                    <div className='font-[monospace] text-[20px] text-[#616161]'>
                      QT-60 (3)/DY-0/LR-/CS-0
                    </div>
                    <div className='font-[monospace] text-[25px] text-[#616161]'>
                      Invoice Value
                    </div>
                  </div>

                  <div className='flex ml-[20px] text-[25px] mr-[40px] font-[system-ui]' style={{ justifyContent: "space-between" }}>
                    <div>
                      <b><i> SALE </i></b>
                    </div>
                    <div className='mr-[20px]'>
                      <b>560.00</b>
                    </div>
                  </div>

                  <div className='mt-[40px] ml-[10px]'>
                    List Bill :MASHESH JI A004
                  </div>

                </div>


              </div>
            </div>
          </div>
          <div className='w-[25%]  '>
            <header className='main-header-right text-[white]'>

              <div className='pl-4'>
                USER
              </div>
              <div className='flex space-x-6'>
                <div>
                  EXTA
                </div>
                <div>
                  TIXA
                </div>
                <div className='pr-[3px]'>
                  GATE
                </div>

              </div>


            </header>


            <div className='text-[14.5px]'>
              <p contenteditable={editMode} className='pl-3'>CREATED AT</p>

              <div className='flex pl-3 pr-1' style={{ justifyContent: "space-between" }}>
                <p contenteditable={editMode} >PAWAN</p>
                <div className='flex  space-x-3'>
                  <p contenteditable={editMode} >07/02/2024</p>
                  <p contenteditable={editMode} >09:24</p>
                  <p contenteditable={editMode} >PANWRAA</p>
                </div>
              </div>

              <div className='pl-3 bg-[#497d70] text-[white]'>
                BILL DETAILS
              </div>
              <p contenteditable={editMode} className='pl-3 '> Amount:192.19</p>
              <div className='text-center'>
                KUSUM
              </div>
              <div className='flex pl-3'>
                <p contenteditable={editMode} >01 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                <div>
                  DR I DUBEY
                </div>
              </div>
              <div className='pl-3 bg-[#497d70] text-[white]'>
                ITEM DETAILS
              </div>
              <p contenteditable={editMode} className='pl-3 '>
                1 THAASTER DAYSSS ASS 100 TAB
              </p>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
