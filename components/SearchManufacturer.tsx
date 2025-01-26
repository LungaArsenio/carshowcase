"use client"

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants'
import { useState, Fragment } from 'react'
import Image from 'next/image'


function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
  const [query, setQuery] = useState("")
  //LOGIC/THOUGHT PROCESS FOR FILTEREDMANUFACTURERS FUNCTION



  const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) =>
    item.toLowerCase()
      .replace(/\s+/g, "")
      .includes(query.toLowerCase().replace(/\s+/g, ""))
  );

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='Car Logo'
            />
          </ComboboxButton>
          <ComboboxInput
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(event) => setQuery(event.target.value)}//this line just grabs the current value on the input box and store it in the state
          />

          {/**Creating the combobox transition to provide predefined options */}

          {/* The element transition has to portray itself as something. But to not add an element to the DOM
            I declare him as Fragment */}
          <Transition as={Fragment}
            leave='transitiom ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            {/**The combobox options are displayed here */}

            <ComboboxOptions>

              {filteredManufacturers.map((item) => (
                    <ComboboxOption
                      key={item}
                      className={( {focus} ) => `
                      relative search-manufacturer__option ${focus ? 'bg-primary-blue text-white' : 'text-gray-900'}`
                      }
                      value={item}
                >
                  {/* stylling the combobox option */}
                  {({ selected, focus }) => (
                    <>
                       <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              focus ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                    </>
                      )}
                    </ComboboxOption>
                  )
                  )}

            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer

/**
 * Combobox element works by rendering a list of options and a text input.
 * Consists of combobox button and then a list of options.
 *
 *
 *
 * Headlessui is built on top of Tailwind CSS. So any class we already configured in our
 * code or tailwind classes will work here perfectly.
 */

{/**ternary used to declare that if the query has nothing to show nothing and when
               * something in there to show all possible options
               */} //not used in this code
