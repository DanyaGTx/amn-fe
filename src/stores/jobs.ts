import { ref } from "vue";
import { defineStore } from "pinia";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref([
    {
      title: 'Title1',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      qualification_scores: {
        client_rating: {value: 1, score: 1},
        client_spent: {value: 1, score: 1},
        duration: {value: 'string', score: 1},
        expertise: {value: 'string', score: 1},
        fixed_price: {value: 'string', score: 1},
        hourly_price: {value: 'string', score: 1},
        interview_hiring: {value: 'number', score: 1},
        location: {value: 'string', score: 1},
        looking_for_agency: {value: 'string', score: 1},
        prev_freelancer_review: {value: 'string', score: 1},
        q_points: 'string',
        workload: {value: 'string', score: 1},
      }
    },
    {
      title: 'Title1',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      qualification_scores: {
        client_rating: {value: 1, score: 1},
        client_spent: {value: 1, score: 1},
        duration: {value: 'string', score: 1},
        expertise: {value: 'string', score: 1},
        fixed_price: {value: 'string', score: 1},
        hourly_price: {value: 'string', score: 1},
        interview_hiring: {value: 'number', score: 1},
        location: {value: 'string', score: 1},
        looking_for_agency: {value: 'string', score: 1},
        prev_freelancer_review: {value: 'string', score: 1},
        q_points: 'string',
        workload: {value: 'string', score: 1},
      }
    },
    {
      title: 'Title1',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      qualification_scores: {
        client_rating: {value: 1, score: 1},
        client_spent: {value: 1, score: 1},
        duration: {value: 'string', score: 1},
        expertise: {value: 'string', score: 1},
        fixed_price: {value: 'string', score: 1},
        hourly_price: {value: 'string', score: 1},
        interview_hiring: {value: 'number', score: 1},
        location: {value: 'string', score: 1},
        looking_for_agency: {value: 'string', score: 1},
        prev_freelancer_review: {value: 'string', score: 1},
        q_points: 'string',
        workload: {value: 'string', score: 1},
      }
    },
    {
      title: 'Title1',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      qualification_scores: {
        client_rating: {value: 1, score: 1},
        client_spent: {value: 1, score: 1},
        duration: {value: 'string', score: 1},
        expertise: {value: 'string', score: 1},
        fixed_price: {value: 'string', score: 1},
        hourly_price: {value: 'string', score: 1},
        interview_hiring: {value: 'number', score: 1},
        location: {value: 'string', score: 1},
        looking_for_agency: {value: 'string', score: 1},
        prev_freelancer_review: {value: 'string', score: 1},
        q_points: 'string',
        workload: {value: 'string', score: 1},
      }
    },
    {
      title: 'Title1',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      qualification_scores: {
        client_rating: {value: 1, score: 1},
        client_spent: {value: 1, score: 1},
        duration: {value: 'string', score: 1},
        expertise: {value: 'string', score: 1},
        fixed_price: {value: 'string', score: 1},
        hourly_price: {value: 'string', score: 1},
        interview_hiring: {value: 'number', score: 1},
        location: {value: 'string', score: 1},
        looking_for_agency: {value: 'string', score: 1},
        prev_freelancer_review: {value: 'string', score: 1},
        q_points: 'string',
        workload: {value: 'string', score: 1},
      }
    },
   
  ]);

  const meta = ref({
    current_page: 0,
    next_page: 0,
    prev_page: 0,
    total_count: 0,
    total_pages: 0,
  })
  return {
    jobs,
    meta
  }
});
