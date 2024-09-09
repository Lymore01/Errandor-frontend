import { IoCreateSharp } from "react-icons/io5";
import { MdSecurity, MdUpdate, MdTune } from "react-icons/md";

export const features = [
  {
    id: crypto.randomUUID(),
    title: "Fast and Reliable",
    description:
      "Post your errand, and within minutes, a verified Errandor will be on their way to assist you.",
    icon: <IoCreateSharp size={120} />,
  },
  {
    id: crypto.randomUUID(),
    title: "Secure Payments",
    description:
      "Your money is safe with us. We use secure escrow services to ensure both parties are protected.",
    icon: <MdSecurity size={120} />,
  },
  {
    id: crypto.randomUUID(),
    title: "Tailored for You",
    description:
      "Customize your errands based on location, urgency, and price. Get the service you need, when you need it.",
    icon: <MdTune size={120} />,
  },
  {
    id: crypto.randomUUID(),
    title: "Real-Time Updates",
    description:
      "Track your errand from start to finish with real-time notifications and updates.",
    icon: <MdUpdate size={120} />,
  },
];

export const stepsData = [
  {
    step: 1,
    title: "Sign Up & Set Up Your Profile",
    description: "Create an account and set up your profile to get started.",
    src: "https://cdn.dribbble.com/users/1767291/screenshots/5860644/media/fb5981d6708b77faa7a46410ce7a93da.gif", // Replace with actual GIF URL
  },
  {
    step: 2,
    title: "Create Your First Errand",
    description: "Post your task details, set a budget, and location.",
    src: "https://example.com/create-errand.gif", // Replace with actual GIF URL
  },
  {
    step: 3,
    title: "Errandors Claim Your Task",
    description: "Receive offers and choose the best Errandor.",
    src: "https://example.com/claim-task.gif", // Replace with actual GIF URL
  },
  {
    step: 4,
    title: "Confirm & Chat",
    description: "Select your Errandor and discuss details via chat.",
    src: "https://example.com/confirm-chat.gif", // Replace with actual GIF URL
  },
  {
    step: 5,
    title: "Track Your Errand in Real-Time",
    description: "Get real-time updates and track the progress.",
    src: "https://example.com/track-errand.gif", // Replace with actual GIF URL
  },
  {
    step: 6,
    title: "Complete & Secure Payment",
    description: "Approve the work and release payment securely.",
    src: "https://example.com/complete-payment.gif", // Replace with actual GIF URL
  },
  {
    step: 7,
    title: "Rate Your Errandor",
    description: "Rate and review your Errandor for quality assurance.",
    src: "https://example.com/rate-errandor.gif", // Replace with actual GIF URL
  },
  {
    step: 8,
    title: "Earn Rewards & Discounts",
    description: "Earn points and unlock perks for every errand.",
    src: "https://example.com/earn-rewards.gif", // Replace with actual GIF URL
  },
  {
    step: 9,
    title: "Post More & Get More Done",
    description: "Easily post new tasks and delegate with ease.",
    src: "https://example.com/post-more.gif", // Replace with actual GIF URL
  },
];

export const navigationMenus = [
  {
    id: crypto.randomUUID(),
    link: "Home",
    href: "/",
  },
  {
    id: crypto.randomUUID(),
    link: "About Us",
    href: "/about",
  },
  {
    id: crypto.randomUUID(),
    link: "Terms",
    href: "/terms",
  },
];

export const dashboardNavigationMenus = [
  {
    id: crypto.randomUUID(),
    link: "Post An Errand",
    href: "/post-errand",
  },
  {
    id: crypto.randomUUID(),
    link: "Find Errands",
    href: "/discover",
  },
  {
    id: crypto.randomUUID(),
    link: "My Errands",
    href: "/errandor/1/errands",
  },
  {
    id: crypto.randomUUID(),
    link: "Account",
    href: "/account",
  }
];

export const errands = [
  {
    title: "Grocery Shopping",
    description: "Need someone to pick up groceries from the local market.",
    whereTo: "Supermarket",
    deadline: "Today, 5:00 PM",
    paymentPrice: 500,
    town: "Nairobi",
    exactLocation: "Westlands",
    statusBg: "bg-[#2196F3]", // Claimed
    status: "Claimed",
  },
  {
    title: "Dog Walking",
    description: "Walk my dog around the neighborhood for 30 minutes.",
    whereTo: "Around the block",
    deadline: "Tomorrow, 9:00 AM",
    paymentPrice: 300,
    town: "Nairobi",
    exactLocation: "Kilimani",
    statusBg: "bg-[#4CAF50]", // Completed
    status: "Completed",
  },
  {
    title: "Package Delivery",
    description: "Deliver a package to my office.",
    whereTo: "Office",
    deadline: "Today, 3:00 PM",
    paymentPrice: 700,
    town: "Nairobi",
    exactLocation: "CBD",
    statusBg: "bg-[#FF5252]", // Canceled
    status: "Canceled",
  },
  {
    title: "Pick Up Laundry",
    description: "Collect my laundry from the laundromat and drop it off at my place.",
    whereTo: "Laundromat",
    deadline: "Today, 6:00 PM",
    paymentPrice: 400,
    town: "Nairobi",
    exactLocation: "Parklands",
    statusBg: "bg-[#2196F3]", // Claimed
    status: "Claimed",
  },
  {
    title: "Car Wash",
    description: "Get my car washed and detailed.",
    whereTo: "Car Wash",
    deadline: "Tomorrow, 11:00 AM",
    paymentPrice: 1000,
    town: "Nairobi",
    exactLocation: "Lavington",
    statusBg: "bg-[#4CAF50]", // Completed
    status: "Completed",
  },
];
export const addErrandsInputs = [
  {
    id: 'errandName',
    label: 'Errand Name',
    placeholder: 'Enter the errand name',
    type: 'text',
  },
  {
    id: 'description',
    label: 'Description',
    placeholder: 'Enter a brief description of the errand',
    type: 'text',
  },
  {
    id: 'location',
    label: 'Location',
    placeholder: 'Enter the general location',
    type: 'text',
  },
  {
    id: 'subLocation',
    label: 'Sub-location',
    placeholder: 'Enter the sub-location',
    type: 'text',
  },
  {
    id: 'exactLocation',
    label: 'Exact Location',
    placeholder: 'Enter the exact location details',
    type: 'text',
  },
  {
    id: 'timeOrDay',
    label: 'Time or Day',
    placeholder: 'Enter the time or day',
    type: 'text', // Consider changing to 'datetime-local' for date and time input
  },
  {
    id: 'estimatedTime',
    label: 'Estimated Time',
    placeholder: 'Enter the estimated time for completion',
    type: 'text', // Can also be 'number' if dealing with hours/minutes
  },
  {
    id: 'payment',
    label: 'Payment',
    placeholder: 'Enter the payment amount or terms',
    type: 'text', // Can also be 'number' if only amounts are accepted
  },
  {
    id: 'urgency',
    label: 'Urgency',
    placeholder: 'Select urgency level',
    type: 'select', // Options could include Low, Medium, High
  },
  {
    id: 'instructions',
    label: 'Instructions',
    placeholder: 'Enter any specific instructions',
    type: 'textarea',
  },
];


