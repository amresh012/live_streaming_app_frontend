import React, { useState, useRef, useEffect } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

const EmojiPicker = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const pickerRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    if (showPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPicker]);

  return (
    <div className="relative inline-block text-left" ref={pickerRef}>
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
      >
        {selectedEmoji?.native || '😊 Select Emoji'}
      </button>

      {showPicker && (
        <div className="absolute z-10 mt-2">
          <Picker
            data={data}
            onEmojiSelect={(emoji) => {
              setSelectedEmoji(emoji);
              setShowPicker(false);
            }}
            theme="light"
            previewPosition="none"
            maxFrequentRows={1}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
