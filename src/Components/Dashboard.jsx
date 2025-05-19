import React,{act, useState} from 'react'
import Countdown from './Countdown'
import { FaRegEdit, FaShareAlt } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { GiCancel } from "react-icons/gi";

const Dashboard = () => {
    const [currentTab, setCurrentTab] = useState('Dashboard')
    const [activeTripDate, setActiveTripDate] = useState('Day 1')
  const [tripData, setTripData] = useState([
    {
      "day": "Day 1",
      "date": "June 15",
      "activitiesCount": 3,
      "notesCount": 2,
      "schedule": [
        {
          "time": "10:00 AM",
          "activity": "Arrive at Charles de Gaulle Airport",
          checked:false
        },
        {
          "time": "2:00 PM",
          "activity": "Check-in at hotel",
          checked:true
        },
        {
          "time": "5:00 PM",
          "activity": "Visit Eiffel Tower",
          checked:false
        }
      ],
      "notes": [
        {
          "time": "9:30 AM",
          "note": "Remember to exchange currency at the airport"
        },
        {
          "time": "10:15 AM",
          "note": "Hotel address: 123 Champs-Élysées, Paris"
        }
      ]
    },
    {
      "day": "Day 2",
      "date": "June 16",
      "activitiesCount": 2,
      "notesCount": 1,
      "schedule": [
        {
          "time": "11:00 AM",
          "activity": "Visit Louvre Museum",
          checked:false
        },
        {
          "time": "3:00 PM",
          "activity": "Lunch at Café de Flore",
          checked:false
        }
      ],
      "notes": [
        {
          "time": "8:00 AM",
          "note": "Buy tickets for Eiffel Tower summit",
          checked:false
        }
      ]
    },
    {
      "day": "Day 3",
      "date": "June 17",
      "activitiesCount": 2,
      "notesCount": 0,
      "schedule": [
        {
          "time": "10:30 AM",
          "activity": "Seine River Cruise",
          checked:false
        },
        {
          "time": "4:00 PM",
          "activity": "Shopping at Champs-Élysées",
          checked:false
        }
      ],
      "notes": []
    },
    {
      "day": "Day 4",
      "date": "June 18",
      "activitiesCount": 1,
      "notesCount": 1,
      "schedule": [
        {
          "time": "2:00 PM",
          "activity": "Relax at Luxembourg Gardens",
          checked:false
        }
      ],
      "notes": [
        {
          "time": "9:00 AM",
          "note": "Pack snacks for the park",
          checked:false
        }
      ]
    },
    {
      "day": "Day 5",
      "date": "June 19",
      "activitiesCount": 2,
      "notesCount": 0,
      "schedule": [
        {
          "time": "12:00 PM",
          "activity": "Notre-Dame Cathedral visit",
          checked:false
        },
        {
          "time": "6:00 PM",
          "activity": "Dinner at Le Procope",
          checked:false
        }
      ],
      "notes": []
    },
    {
      "day": "Day 6",
      "date": "June 20",
      "activitiesCount": 1,
      "notesCount": 0,
      "schedule": [
        {
          "time": "3:00 PM",
          "activity": "Photo session in Montmartre",
          checked:false
        }
      ],
      "notes": []
    },
    {
      "day": "Day 7",
      "date": "June 21",
      "activitiesCount": 0,
      "notesCount": 1,
      "schedule": [],
      "notes": [
        {
          "time": "10:00 AM",
          "note": "Rest day - sleep in"
        }
      ]
    },
    {
      "day": "Day 8",
      "date": "June 22",
      "activitiesCount": 2,
      "notesCount": 0,
      "schedule": [
        {
          "time": "9:00 AM",
          "activity": "Versailles Palace Tour",
          checked:false
        },
        {
          "time": "1:00 PM",
          "activity": "Garden picnic",
          checked:false
        }
      ],
      "notes": []
    },
    {
      "day": "Day 9",
      "date": "June 23",
      "activitiesCount": 1,
      "notesCount": 0,
      "schedule": [
        {
          "time": "7:00 PM",
          "activity": "Moulin Rouge Show",
          checked:false
        }
      ],
      "notes": []
    },
    {
      "day": "Day 10",
      "date": "June 24",
      "activitiesCount": 3,
      "notesCount": 1,
      "schedule": [
        {
          "time": "8:00 AM",
          "activity": "Breakfast at local café",
          checked:false
        },
        {
          "time": "11:00 AM",
          "activity": "Explore Marais District",
          checked:false
        },
        {
          "time": "5:00 PM",
          "activity": "Evening walk along the Seine",
          checked:false
        }
      ],
      "notes": [
        {
          "time": "10:00 AM",
          "note": "Charge camera batteries"
        }
      ]
    },
    {
      "day": "Day 11",
      "date": "June 25",
      "activitiesCount": 2,
      "notesCount": 1,
      "schedule": [
        {
          "time": "9:00 AM",
          "activity": "Bike tour of Paris",
          checked:false
        },
        {
          "time": "3:00 PM",
          "activity": "Macaron making class",
          checked:false
        }
      ],
      "notes": [
        {
          "time": "8:00 AM",
          "note": "Wear comfortable shoes"
        }
      ]
    },
    {
      "day": "Day 12",
      "date": "June 26",
      "activitiesCount": 1,
      "notesCount": 0,
      "schedule": [
        {
          "time": "2:00 PM",
          "activity": "Boat ride to Île de la Cité",
          checked:false
        }
      ],
      "notes": []
    },
    {
      "day": "Day 13",
      "date": "June 27",
      "activitiesCount": 2,
      "notesCount": 0,
      "schedule": [
        {
          "time": "10:00 AM",
          "activity": "Day trip to Giverny",
          checked:false
        },
        {
          "time": "6:00 PM",
          "activity": "Return to Paris",
          checked:false
        }
      ],
      "notes": []
    },
    {
      "day": "Day 14",
      "date": "June 28",
      "activitiesCount": 2,
      "notesCount": 1,
      "schedule": [
        {
          "time": "11:00 AM",
          "activity": "Cooking class with locals",
          checked:false
        },
        {
          "time": "4:00 PM",
          "activity": "Walk through Latin Quarter",
          checked:false
        }
      ],
      "notes": [
        {
          "time": "9:00 AM",
          "note": "Bring apron for cooking class"
        }
      ]
    },
    {
      "day": "Day 15",
      "date": "June 29",
      "activitiesCount": 1,
      "notesCount": 1,
      "schedule": [
        {
          "time": "8:00 AM",
          "activity": "Check-out and head to airport",
          checked:false
        }
      ],
      "notes": [
        {
          "time": "7:00 AM",
          "note": "Double-check passport and tickets",
        }
      ]
    }
  ])

  const selectedTrip = tripData.find(trip => trip.day === activeTripDate);

  const [checkedActivities, setCheckedActivities] = useState({});

  const addNoteToDay = (dayLabel, newNote) => {
  const updatedData = tripData.map(day => {
    if (day.day !== dayLabel) return day;

    return {
      ...day,
      notes: [...day.notes, newNote],
      notesCount: day.notesCount + 1
    };
  });

  setTripData(updatedData);
};

  const handleCheck = (day, index) => {
  const updatedTripData = tripData.map((tripDay) => {
    if (tripDay.day !== day) return tripDay;

    const updatedSchedule = [...tripDay.schedule];
    updatedSchedule[index] = {
      ...updatedSchedule[index],
      checked: !updatedSchedule[index].checked,
    };

    return {
      ...tripDay,
      schedule: updatedSchedule,
    };
  });
  setTripData(updatedTripData);
};

const removeNoteFromDay = (dayLabel, noteIndex) => {
  const updatedData = tripData.map(day => {
    if (day.day !== dayLabel) return day;

    const newNotes = day.notes.filter((_, idx) => idx !== noteIndex);

    return {
      ...day,
      notes: newNotes,
      notesCount: newNotes.length
    };
  });

  setTripData(updatedData);
};

const [AddNoteModal ,setAddNoteModal] = useState(false)
const [noteText, setNoteText] = useState('')


  return (
    <div className="relative h-screen w-screen flex flex-col gap-4 overflow-y-auto">
      
    {/* modal for editing trip name and date */}
        <div className='fixed hidden items-center justify-center h-full w-full z-40 backdrop-blur-[1px] transition-all duration-500'>
            <div className='relative h-[250px] w-[350px] border rounded-md border-white bg-[#1c2637]'>
                <GiCancel size={20} className='absolute top-[5%] right-[3%] text-white'/>
            </div>
        </div>
    {/* modal for adding note */}
        <div className={`${AddNoteModal ? '' : 'hidden'} fixed flex items-center justify-center h-full w-full z-40 backdrop-blur-[1px] transition-all duration-500`}>
            <div className='relative h-[250px] w-[350px] flex items-center gap-4 flex-col p-4 border rounded-md border-white bg-[#1c2637]'>
                <GiCancel size={20} className='absolute top-[5%] right-[3%] text-white cursor-pointer' onClick={()=> {setAddNoteModal(false)}}/>
                <h1 className='relative text-white font-semibold text-lg'>Note for <span className='text-pink-500 font-bold'>{activeTripDate }</span></h1>
                  <textarea className='relative p-2 w-full border border-white text-white' placeholder={`write a note for ${activeTripDate}`} onChange={(e) => setNoteText(e.target.value)} value={noteText} />
                  <button className='w-full rounded-md p-2 text-white font-semibold tracking-wider bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' onClick={()=> {addNoteToDay(activeTripDate, {time: "7:00 AM",note: noteText}); setNoteText(''); setAddNoteModal(false)}}>Submit</button>
            </div>
        </div>
        

        {/* navbar  */}
        <nav className="relative z-10 py-4 px-12 flex flex-row items-center justify-between">
            <h1 className='relative logo text-white font-bold text-2xl'>Trip<span className=' font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Ready</span></h1>
            <div className='relative flex flex-row gap-4'>
                <div className='relative flex flex-col gap-1 cursor-pointer' onClick={()=> {setCurrentTab('Dashboard')}}>
                    <div className={ `${currentTab==='Dashboard' ? 'text-white' : 'text-gray-500'} transition-all duration-300`}>Dashboard</div>
                    <div className={` ${currentTab==='Dashboard' ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-[2px] w-full rounded-full transition-all duration-300' : 'w-0'}`} ></div>
                </div>
                <div className='relative flex flex-col gap-1 cursor-pointer' onClick={()=> {setCurrentTab('Itinerary')}}>
                    <div className={ `${currentTab==='Itinerary' ? 'text-white' : 'text-gray-500'} transition-all duration-300`}>Itinerary</div>
                    <div className={` ${currentTab==='Itinerary' ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-[2px] w-full rounded-full transition-all duration-300' : 'w-0'}`} ></div>
                </div>
                <div className='relative flex flex-col gap-1 cursor-pointer' onClick={()=> {setCurrentTab('Packing List')}}>
                    <div className={ `${currentTab==='Packing List' ? 'text-white' : 'text-gray-500'} transition-all duration-300`}>Packing List</div>
                    <div className={` ${currentTab==='Packing List' ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-[2px] w-full rounded-full transition-all duration-300' : 'w-0'}`} ></div>
                </div>
            </div>
        </nav>

        
        <div className='relative flex-col flex gap-6 h-full w-[90%] self-center'>

            {/* first row */}
            <div className='relative flex flex-row  gap-6 w-full h-[280px]'>
                {/* first container */}
                <div className='relative w-[75%] h-full rounded-xl flex flex-col gap-6 border items-start justify-center border-gray-600 bg-[#1c2637] overflow-hidden py-4 px-8'>
                    <div className='absolute top-0 left-0 h-[4px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full'></div>
                    <div className='relative flex flex-row items-center justify-between w-full'>
                        <div className='flex relative flex-col gap-1'>
                            <h1 className='relative text-white font-bold text-lg'>Your Trip to Paris</h1>
                            <h1 className='relative text-gray-200 font-lighter text-sm'>Departing June 15, 2025</h1>
                        </div>
                        <FaRegEdit size={24} className='text-white'/>
                    </div>
                    <Countdown targetDate={"2025-06-01T00:00:00"} />
                    <div className='relative flex flex-row gap-4'>
                        <button className='relative flex flex-row gap-2 text-white items-center font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 w-fit py-2 px-4 rounded-lg '><FaRegClipboard size={20} />Plan Itinerary</button>
                        <button className='relative flex flex-row gap-2 text-blue-500 border border-blue-500 font-semibold items-center font-semibold hover:bg-gradient-to-r hover:from-[#1e90ff] hover:to-[#007bff] hover:text-white transition-all druation-300 w-fit py-2 px-4 rounded-lg '><FaShareAlt size={20} />Plan Itinerary</button>
                    </div>
                </div>

                {/* second container  */}
                <div className='relative w-[25%] h-full flex-col  gap-8 flex py-4 px-8 rounded-xl border border-gray-600 bg-[#1c2637]'>
                    <h1 className='relative text-white text-lg font-bold'>Weather Forecast</h1>
                    <div className='relative flex flex-row items-center gap-3'>
                        <div className='relative rounded-full bg-[#1d3c5d] text-blue-300 h-10 w-10 flex items-center justify-center'>
                            <MdOutlineWbSunny size={20} />
                        </div>
                        <div className='relative flex flex-col'>
                            <h1 className='text-white font-bold text-lg'>24°C</h1>
                            <h1 className='text-gray-200 font-light text-sm font-bold'>Sunny, Paris</h1>
                        </div>
                    </div>

                    <div className='relative flex flex-row w-full justify-around items-start'>
                        <div className='relative flex flex-col items-center gap-2'>
                            <h2 className='text-gray-200 text-xs'>Mon</h2>
                            <div className='relative rounded-full bg-[#1d3c5d] text-blue-300 h-8 w-8 flex items-center justify-center'>
                                <MdOutlineWbSunny size={18} />
                            </div>
                            <h1 className='text-xs font-bold text-white'>25°C</h1>
                        </div>
                        <div className='relative flex flex-col items-center gap-2'>
                            <h2 className='text-gray-200 text-xs'>Tue</h2>
                            <div className='relative rounded-full bg-[#1d3c5d] text-blue-300 h-8 w-8 flex items-center justify-center'>
                                <IoMdCloudOutline size={18} />
                            </div>
                            <h1 className='text-xs font-bold text-white'>22°C</h1>
                        </div>
                        <div className='relative flex flex-col items-center gap-2'>
                            <h2 className='text-gray-200 text-xs'>Wed</h2>
                            <div className='relative rounded-full bg-[#1d3c5d] text-blue-300 h-8 w-8 flex items-center justify-center'>
                                <IoMdCloudOutline size={18} />
                            </div>
                            <h1 className='text-xs font-bold text-white'>21°C</h1>
                        </div>
                        <div className='relative flex flex-col items-center gap-2'>
                            <h2 className='text-gray-200 text-xs'>Thu</h2>
                            <div className='relative rounded-full bg-[#1d3c5d] text-blue-300 h-8 w-8 flex items-center justify-center'>
                                <MdOutlineWbSunny size={18} />
                            </div>
                            <h1 className='text-xs font-bold text-white'>24°C</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* second row */}
            <div className='relative flex flex-row gap-6 w-full h-fit pb-8'>
                <div className='relative w-[66%] h-full flex flex-row gap-6'>
                     <div className='relative w-full h-full rounded-xl flex flex-col gap-4 border items-start border-gray-600 bg-[#1c2637] overflow-hidden py-4 px-8'>
                        <h1 className='relative font-bold text-lg text-pink-500'>Trip Days</h1>
                        <div className='days-container relative flex flex-col gap-2 w-full '>
                            {tripData.slice(0,7).map((trip, index) => 
                                <div key={index} className={`${activeTripDate === trip.day ? 'border-l-4 border-pink-500 bg-[#292e4e]' : ''} relative hover:bg-gray-700 cursor-pointer transition-all duration-400 flex flex-row justify-between p-4 rounded-md`} onClick={()=>{setActiveTripDate(trip.day)}}>
                                <div className='flex relative flex-col gap-1 items-center'>
                                    <h1 className='relative text-white text-md font-semibold'>{trip.day}</h1>
                                    <h2 className='relative text-gray-300 text-sm'>{trip.date}</h2>
                                </div>
                                <div className='flex relative flex-col gap-1 items-center'>
                                    <h1 className='relative text-xs font-light text-pink-500 font-semibold'>Activities {trip.activitiesCount}</h1>
                                    <h1 className='relative text-xs font-light text-blue-500 font-semibold'>Notes {trip.notes.length}</h1>
                                </div>
                            </div>
                            )}
                        </div>
                     </div>
                     
                     <div className='relative w-full h-full rounded-xl flex flex-col gap-4 border items-start border-gray-600 bg-[#1c2637] overflow-hidden py-4 px-8'>
                            <h1 className='relative text-pink-500 font-bold text-lg'>{activeTripDate} Schedule</h1>
                            <div className='flex relative flex-col gap-2 w-full'>
                              {selectedTrip.schedule.map((sch,idx)=> {
                               const isChecked = checkedActivities[selectedTrip.day]?.[sch.activity] || false;
                               return(
                                  <div className='relative flex flex-row justify-between p-2' key={idx}>
                                  <div className='relative flex flex-row gap-2 items-start'>
                                    <input type="checkbox" className='mt-1' checked={sch.checked} onChange={() => handleCheck(selectedTrip.day, idx)}/>
                                    <div className='flex flex-col justify-start gap-2'>
                                      <h1 className={` ${sch.checked ? 'line-through text-gray-300' : 'text-white'} text-sm`}>{sch.activity}</h1>
                                      <h1 className={` ${sch.checked ? 'text-gray-300' : 'text-white'} text-xs`}>{sch.time}</h1>
                                    </div>
                                  </div>
                                </div>
                               )                       
                            })}
                            </div>
                     </div>
                </div>
                <div className='relative w-[33%] h-full rounded-xl flex flex-col gap-4 border items-start border-gray-600 bg-[#1c2637] overflow-hidden py-4 px-8'>
                  <h1 className='text-pink-500 relative text-lg font-bold'>Notes for {activeTripDate}</h1>
                  <div className='relative flex flex-col gap-4 w-full'>
                    {selectedTrip.notes.length === 0 ? (
                      <h1 className='text-gray-400 px-2 italic'>No Notes for the Day</h1>
                    ) : (
                      selectedTrip.notes.map((nt, idx) => (
                        <div
                          key={idx}
                          className='bg-gray-700 rounded-md flex flex-row justify-between items-center gap-2 p-4 mb-2 transition-all duration-300 hover:-translate-y-0.5'
                        >
                          <div className='flex flex-col gap-1 items-start'>
                            <h1 className='text-white font-semibold text-md'>{nt.note}</h1>
                            <h1 className='text-xs text-gray-400'>{nt.time}</h1>
                          </div>
                          <GiCancel className='text-gray-500 cursor-pointer' onClick={() => removeNoteFromDay(activeTripDate, idx)} size={20} />
                        </div>
                      ))
                    )}
                  </div>
                  <button className='w-full rounded-md p-2 text-white font-semibold tracking-wider bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all duration-300' onClick={()=> {setAddNoteModal(true)}}>+Add Notes</button>
                </div>
            
            </div>
        </div>
</div>



  )
}

export default Dashboard